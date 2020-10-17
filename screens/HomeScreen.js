import React from "react";
import Screen from "./Screen";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

// Images
import doctor from "../assets/home/doctor.png";
import girlOnLaptop from "../assets/home/girl-on-laptop.jpg";
import discussionOnSkype from "../assets/home/discussion-skype.jpg";

export const HomeScreen = ({ navigation }) => {
    const patientsLists = [
        {
            name: "Find the right health expert for your needs."
        },
        {
            name: "Access telemedicine instantly."
        },
        {
            name: "Have your medical imaging safe and accessible."
        },
        {
            name: "Easy - Instant - Secure - Free !"
        },

    ]

    const professionalsLists = [
        {
            name: "Create your own virtual medical practice instantly."
        },
        {
            name: "Offer telemedicine and virtual house visits at your place."
        },
        {
            name: "Improve your visibility & outreach with powerful tools."
        },
        {
            name: "Find help from specialists - easy to use and comprehensive."
        },
        {
            name: "Medical Imaging/DICOM System - have your own private PACS."
        }
    ]
    return (
        <Container>
            <ScrollView>
                <StatusBar></StatusBar>
                <Screen navigation={navigation} />
                <DoctorBackground source={doctor}>
                    <TextsPresentation>IF YOU ARE LOOKING FOR HEALTH CONSULTATION</TextsPresentation>
                    <TextQualities>EASY - INSTANT - FREE</TextQualities>
                </DoctorBackground>
                <PatientsContainer>
                    <Title>For Patients</Title>
                    <Infos>{patientsLists.map((lists, index) => {
                        return (
                            <SafeAreaView>
                                <Font>
                                    <FontAwesome5 name="check" color="#03C198"></FontAwesome5>
                                </Font>
                                <InfosBlock>
                                    <InfosText key={index}>{lists.name}</InfosText>
                                </InfosBlock>
                            </SafeAreaView>
                        )
                    })}</Infos>
                    <InfosImage source={girlOnLaptop} />
                </PatientsContainer>

                <ProfessionalsContainer>
                    <Title>For Health Care Professionals</Title>
                    <Infos>{professionalsLists.map((lists, index) => {
                        return (
                            <SafeAreaView>
                                <Font>
                                    <FontAwesome5 name="check" color="#03C198"></FontAwesome5>
                                </Font>
                                <InfosBlock>
                                    <InfosText key={index}>{lists.name}</InfosText>
                                </InfosBlock>
                            </SafeAreaView>
                        )
                    })}</Infos>
                    <InfosImage source={discussionOnSkype} />
                </ProfessionalsContainer>
            </ScrollView>
        </Container >
    );

}


const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const DoctorBackground = styled.ImageBackground`
  width: 100%;
  height: 216px;
  padding-left: 24px;
`;

const TextsPresentation = styled.Text`
  width: 216px;
  font-size: 18px;
  margin-top: 65px;
  color: #fff;  
`

const TextQualities = styled.Text`
  color: #fff;
  margin-top: 15px;
  font-size: 13px;
`

const PatientsContainer = styled.View`
  padding: 40px 26px;
  padding-right: 26px;
`
const ProfessionalsContainer = styled.View`
padding: 40px 26px;
padding-right: 26px;
`

const Title = styled.Text`
  font-size: 20px;
  line-height: 27px;
  color: #1976D2;
  text-transform: uppercase;
  font-weight: 700;
`
const Infos = styled.View`
  margin-top: 10px;
`

const InfosBlock = styled.View`
margin-left: 25px;
margin-top: -16px;
`
const InfosText = styled.Text`
  width: 303px;
  font-size: 15px;
  line-height: 20px;
  color: #1976D2;
`

const Font = styled.View`
flex: 1; 
margin-top: 25px;
`;

const InfosImage = styled.Image`
  width: 100%;
  height: 169px;
  margin-top: 55px;
`;