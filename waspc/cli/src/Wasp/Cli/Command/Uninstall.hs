module Wasp.Cli.Command.Uninstall
  ( uninstall,
  )
where

import Control.Monad (when)
import Control.Monad.IO.Class (liftIO)
import StrongPath (Dir', File', Path', Rel, fromAbsDir, fromAbsFile, reldir, relfile, (</>))
import System.Exit (die)
import Wasp.Cli.Command (Command)
import Wasp.Cli.Command.Message (cliSendMessageC)
import Wasp.Cli.Command.Telemetry.Common (getWaspCacheDirPath)
import Wasp.Cli.Command.Utils.File (deleteDirectoryIfExists, deleteFileIfExists, getUserCacheDirPath)
import Wasp.Cli.Command.Utils.User (HomeDir, getHomeDir)
import qualified Wasp.Message as Msg

-- | Removes Wasp CLI from the system.
-- It removes the follwing:
-- {home}/.local/share/wasp-lang
-- {home}/.local/bin/wasp
-- {home}/.cache/wasp
uninstall :: Command ()
uninstall = do
  cliSendMessageC $ Msg.Info "Uninstalling Wasp ..."

  liftIO removeWaspFiles

  cliSendMessageC $ Msg.Success "Uninstalled Wasp"

removeWaspFiles :: IO ()
removeWaspFiles = do
  homeDir <- getHomeDir
  userCacheDir <- getUserCacheDirPath

  let waspInstallationDir' = fromAbsDir $ homeDir </> waspInstallationDir
      waspBinFile' = fromAbsFile $ homeDir </> waspBinFile
      waspCacheDir = fromAbsDir $ getWaspCacheDirPath userCacheDir

  putStr $
    unlines
      [ "We will remove the following directories:",
        "  " ++ waspInstallationDir',
        "  " ++ waspCacheDir,
        "",
        "We will also remove the following files:",
        "  " ++ waspBinFile',
        "",
        "Are you sure you want to continue? [y/N]"
      ]

  answer <- getLine

  when (answer /= "y") $ die "Aborted."

  deleteDirectoryIfExists waspInstallationDir'
  deleteFileIfExists waspBinFile'
  deleteDirectoryIfExists waspCacheDir
  where
    waspInstallationDir :: Path' (Rel HomeDir) Dir'
    waspInstallationDir = [reldir|.local/share/wasp-lang|]

    waspBinFile :: Path' (Rel HomeDir) File'
    waspBinFile = [relfile|.local/bin/wasp|]
