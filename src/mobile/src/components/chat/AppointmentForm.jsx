import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import DatePicer from "react-native-modern-datepicker";
import IconCalendar from "../../../assets/icons/IconCalendar";
import IconChevroBack from "../../../assets/icons/IconChevroBack";

import { FormInput } from "../FormInput";
import { useThemeProvider } from "../../theme/themeProvider";

export function AppointmentForm({ onClose }) {
  const [form, setForm] = useState({
    medico: "",
    especialidade: "",
    date: "",
  });

  const [openDate, setOpenDate] = useState(false);

  const handleSubmit = () => {

    const formValues = Object.values(form);
    const emptyField = formValues.some((value) => value === "");
    if (emptyField) {
      return console.log("vazio");
    }
    console.log("-------------")

    // CÓDIGO DA API

    setOpenDate(false);
    onClose(false);
  };

  const showDatepicker = () => {
    setOpenDate(!openDate);
  };

  const handlechangeDate = (date) => {
    // const newDate = date.replace(/\//g, "-");
    // handleInput("date", new Date(newDate));

    handleInput("date", date);
  };

  const handleInput = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
  };

  const { theme } = useThemeProvider();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColorForm }]}
    >
      <TouchableOpacity
      onPress={() => onClose(false)}
      >

      <IconChevroBack
        
        width={30}
        height={30}
        style={{ color: "gray", padding: 20 }}
      />
      </TouchableOpacity>

      <Text style={[styles.title, { color: theme.color }]}>
        Agendar consulta
      </Text>

      <ScrollView>
        <FormInput
          placeholder="Médico"
          value={form.medico}
          onChangeText={(t) => handleInput("medico", t)}
          style={{ marginTop: 20 }}
        />

        <FormInput
          placeholder="Especialidade"
          value={form.especialidade}
          onChangeText={(t) => handleInput("especialidade", t)}
        />

        <View style={styles.dateSelect}>
          <Text style={[styles.label, { color: theme.color }]}>Data: </Text>

          <TouchableOpacity onPress={showDatepicker}>
            <IconCalendar width={26} height={26} style={{ color: "gray" }} />
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={true} visible={openDate}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicer
                mode="datepicker"
                onDateChange={handlechangeDate}
              />

              <TouchableOpacity onPress={showDatepicker}>
                <Text style={styles.label}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.button, { backgroundColor: theme.buttonForm }]}
          >
            <Text style={styles.buttonText}>
              Agendar Consulta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E8E8E8",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  dateSelect: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#00A884",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
