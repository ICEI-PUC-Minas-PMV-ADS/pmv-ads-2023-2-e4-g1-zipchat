import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useThemeProvider } from "../../theme/themeProvider";

import IconChatLeft from "../../../assets/icons/IconChatLeft";
import IconTrash from "../../../assets/icons/IconTrash";
import IconClose from "../../../assets/icons/IconClose";
import IconCheck from "../../../assets/icons/IconCheck";

export function SidebarChatButton({ chatItem, active, onClick, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleCancelButton = () => {
    setDeleting(false);
  };

  const handleConfirmButton = () => {
    if (deleting) onDelete(chatItem.id);
    setDeleting(false);
  };

  const handleClickButton = () => {
    if(!deleting){
      onClick(chatItem.id)
    }
  };

  const {theme} = useThemeProvider();
  return (
    <TouchableOpacity onPress={handleClickButton}>
      <View
        style={[
          styles.container,
          { backgroundColor: active ? theme.activeButton : "transparent" },
        ]}
      >
        <View style={{ marginRight: 12 }}>
          {!deleting && (
            <IconChatLeft width={16} height={16} style={{ color: "white" }} />
          )}
          {deleting && (
            <IconTrash width={16} height={16} style={{ color: "white" }} />
          )}
        </View>

        <View style={styles.textArea}>
          {deleting && (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.text}
            >{`Deletar "${chatItem.title}"  ? `}</Text>
          )}
          {!deleting && (
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
              {chatItem.title}
            </Text>
          )}
        </View>
        {active && !deleting && (
          <TouchableOpacity onPress={() => setDeleting(true)}>
            <View style={styles.deleteIcon}>
              <IconTrash width={16} height={16} style={{ color: "white" }} />
            </View>
          </TouchableOpacity>
        )}

        {deleting && (
          <View
            style={[
              styles.deleteIcon,
              { flexDirection: "row", justifyContent: "space-around", flex: 1 },
            ]}
          >
            <TouchableOpacity onPress={handleConfirmButton}>
              <IconCheck width={20} height={20} style={{ color: "white", }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancelButton}>
              <IconClose width={20} height={20} style={{ color: "white" }} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 6,
    fontSize: 14,
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderWidth: 1,
    marginTop: 10,
  },
  textArea: {
    flex: 2,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    color: "white",
  },
  deleteIcon: {
    marginHorizontal: 1,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    
  },
});
