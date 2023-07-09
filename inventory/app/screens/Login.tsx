import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useViewerStore } from "@app/stores/Viewer";
import { BtnMain, MainView } from "@app/components";
import { fakeApiPostLogin } from "@app/apis";
import type { ApiResponsePostLogin, ViewerInfo } from "@app/types";
import { globalStyles } from "@app/styles";
import Loading from "./Loading";

export default function Login(): JSX.Element {
  // variables
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const { setViewerInfo } = useViewerStore((store) => store);

  // functions
  const loginHandler = async (): Promise<void> => {
    try {
      setIsLoggingIn(true);
      const responseViewer: ApiResponsePostLogin | null =
        await fakeApiPostLogin(username, password);
      if (responseViewer === null) {
        throw new Error("login failed");
      }
      const newViewerInfo: ViewerInfo = {
        id: responseViewer.id,
        displayName: responseViewer.displayName,
        firstName: responseViewer.firstName,
        lastName: responseViewer.lastName,
        email: responseViewer.email,
      };
      await setViewerInfo(responseViewer.token, newViewerInfo);
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const isLoginDisabled = (): boolean => {
    return !(!!username && !!password);
  };

  // render
  return isLoggingIn ? (
    <Loading />
  ) : (
    <MainView>
      <View style={styles.form}>
        <TextInput
          style={styles.inputUser}
          placeholder="Username"
          onChangeText={(text: string) => setUsername(text)}
          value={username}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPswd}
            placeholder="Password"
            onChangeText={(text: string) => setPassword(text)}
            value={password}
          />
          <Icon
            style={styles.eyeIcon}
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-off" : "eye"}
            size={20}
          />
        </View>
        <BtnMain
          name="Login"
          disabled={isLoginDisabled()}
          onPress={loginHandler}
        />
      </View>
    </MainView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignSelf: "center",
    marginTop: 60,
    padding: 20,
    gap: 20,
    width: "60%",
  },
  inputUser: {
    height: 44,
    padding: 10,
    backgroundColor: "#ffffff",
    color: "#424242",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  inputPswd: {
    flex: 1,
    height: 44,
    padding: 10,
    backgroundColor: "#ffffff",
    color: "#424242",
  },
  eyeIcon: {
    padding: 10,
    color: "#424242",
  },
});
