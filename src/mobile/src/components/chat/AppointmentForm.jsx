import React, { useEffect, useState } from "react";
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
import { AI } from '../../constants'

import { FormInput } from "../FormInput";
import { useThemeProvider } from "../../theme/themeProvider";
import { createAppointments } from "../../services/appointmentsService"


// const especialidadeMedico = [
//   "Cardiologia", "Dermatologia", "Ginecologia e Obstetrícia", "Ortopedia", "Anestesiologia", "Pediatria", "Oftalmologia", "Psiquiatria", "Acupuntura", "Alergia", "Imunologia", "Angiologia"," Clínico Geral"
// ]
const especialidadeMedicas = [
  {value: '1', label: 'Cardiologia'},
  {value: '2', label: 'Dermatologia'},
  {value: '3', label: 'Clínico Geral'},
  {value: '4', label: 'Ortopedia'},
  {value: '5', label: 'Imunologia'},
]

const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}

const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}


export function AppointmentForm({ motivoconsulta, anamneseid, onClose }) {
  const [especialidade, setEspecialidade] = useState({value: '1', label: 'Cardiologia'});
  const [date, setDate] = useState(new Date());
  const [booted, setBooted] = useState(false);
  const [userName, setUserName] = useState("username");

  
  const getUserName = async () =>{
    const decodedToken = await getDecodedAccessToken();
    const user = decodedToken.email;
    if(user){
      setUserName(user)
      setBooted(true)
      return user;
    }
  }

  useEffect(() => {
    if(!booted) {
      getUserName();
    }
  }, [booted])

  const [form, setForm] = useState({
    medico: "",
    especialidade: "",
    date: "",
  });

  const [openDate, setOpenDate] = useState(false);

  const handleSubmit = () => {

    createAppointments({
      paciente: userName,
      anamneseId: anamneseid,
      medico: especialidade.label,
      data: new Date(date).toISOString(),
      evento: `Consulta sobre ${motivoconsulta}`
    })

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
        
        <View>
          
        <label 
              for="cars" border="none" 
              className={`text-lg outline-none ml-5  rounded-sm p-3 pb-1 w-4/5 border-b-2 ${theme === 'dark' ? 'bg-gpt-gray' : 'bg-white'}`}>
                Especilidade Médica
              </label >
            <select 
              id="especilidade_medica" 
              name="especilidade_medica" 
              className={`text-lg outline-none ml-5  rounded-sm p-3 pb-1 w-4/5 border-b-2 ${theme === 'dark' ? 'bg-gpt-gray' : 'bg-white'}`}
              onChange={(e) => setEspecialidade({value: e.target.value, label: especialidadeMedicas.filter(x => x.value ==  e.target.value)[0].label})}
              >
              {
              especialidadeMedicas.map((especilidade)=>(
                <option key={especilidade.value} value={especilidade.value}>{especilidade.label}</option>
              ))
              }
            </select>

        </View>

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
                onDateChange={e => setDate(e)}
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
