import React, { useState } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";

import IconUser from "../../../assets/icons/IconUser";
import IconRobot from "../../../assets/icons/IconRobot";
import { useThemeProvider } from "../../theme/themeProvider";
import { AI } from '../../constants'

import { AppointmentForm } from "./AppointmentForm";

export function ChatMessageItem({ item }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { theme } = useThemeProvider();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: item.author === AI && "rgb(75 85 99)",
          opacity: item.author === AI ? 0.5 : 1,
        },
      ]}
    >
      <View style={styles.messageArea}>
        <View
          style={[
            styles.icon,
            {
              backgroundColor:
                item.author === AI ? "rgb(20 83 45)" : "rgb(30 58 138)",
            },
          ]}
        >
          {item.author === "me" && (
            <IconUser width={24} height={24} style={{ color: "white" }} />
          )}
          {item.author === AI && (
            <IconRobot width={24} height={24} style={{ color: "white" }} />
          )}
        </View>

        <View style={styles.messageWrapper}>
          <Text style={[styles.message, { color: theme.color }]}>{item.body}</Text>
          {item.author === AI && item.body !== "Resposta da AI" && (
            <Text onPress={() => setModalVisibility(true)} style={[styles.link, { color: theme.link }]}>Marcar consulta ?</Text>
          )}

          <Modal
            animationType="fade"
            visible={modalVisibility}
            transparent={false}
            onRequestClose={() => setModalVisibility(false)}
          >
            <AppointmentForm onClose={setModalVisibility} />
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    padding: 7,
  },
  messageArea: {
    maxWidth: "100%",
    // alignSelf: "center",

    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 4,
  },
  messageWrapper: {
    flex: 1,
  },
  message: {
    maxWidth: "100%",

  },
  link: {
    textDecorationLine: 'underline',
    paddingTop: 5
  },
});
