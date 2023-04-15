<?php
class AuthUtils {
  public static function startSession($id, $username) {
    session_start();
    $_SESSION["logged_in"] = true;
    $_SESSION["id"] = $id;
    $_SESSION["username"] = $username;
    echo "from AuthUtils::startSession Hello World!";
  }
}
?>