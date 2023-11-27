import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useThemeProvider } from "../../theme/themeProvider";

import IconClose from "../../../assets/icons/IconClose";
import IconAdd from "../../../assets/icons/IconAdd";
import IconTrash from '../../../assets/icons/IconTrash'

import { SidebarButton } from "./SidebarButton";
import { UserArea } from "./UserArea";

export function ModalConten({ onClose, children, onClear, onNewChat }) {
  const {theme} = useThemeProvider();
  return (
    <View style={styles.container}>
      <View style={styles.section2}>

        <View style={[styles.section3, {backgroundColor: theme.backgroundSidebar}]}>


          <TouchableOpacity onPress={onNewChat}>
          <View style={styles.newChat}>
          <IconAdd width={16} height={16} style={{ color: "white",     marginRight: 16}} />
            <Text style={{color: 'white'}}>Nova Conversa</Text>
          </View>
          </TouchableOpacity>


          <View style={styles.nav}>
            <ScrollView>  
              {children}
            </ScrollView>
          </View>


          <TouchableOpacity>
          <View styles={styles.deleteChat}>
            <SidebarButton icon={<IconTrash width={16} height={16} style={{color: 'white'}} />} label={"Limpar todas as conversas"} onClick={onClear}/>
          </View>
          </TouchableOpacity>

          <View style={styles.userArea}>
            <UserArea />
          </View>

        </View>

        <TouchableOpacity onPress={() => onClose(false)}>
          <View style={styles.iconClose}>
            <IconClose width={24} height={24} style={{ color: "white" }} />
          </View>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(75, 85, 99)",
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    opacity: 0.75,
    flexDirection: "row",
  },
  section2: {
    height: "100%",
    flexDirection: "row",
  },
  section3: {
    width: 256,
    padding: 12,
    backgroundColor: "#018266",
    paddingTop: 12,
  },
  newChat: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
    fontSize: 14,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
  },
  nav: {
    flex: 1, 
    paddingBottom: 10
  },
  deleteChat: {
    borderWidth: 1,
    borderColor: 'rgb(55 65 81)',
    paddingTop: 12
  },
  iconClose: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  userArea: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.4) '
  }
});
