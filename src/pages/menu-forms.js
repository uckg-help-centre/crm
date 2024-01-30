import React, { useState } from "react";
import { Tabs, Tab, Box, Divider, Button } from "@mui/material";
import CreateNewMember from "src/sections/member/member-form";
import CreateAssistant from "src/sections/member/assistant-form";
import CreateBaptism from "src/sections/member/baptism-form";

const commonTabStyle = {
  m: 1,
  p: 1,
  "&.Mui-selected": { backgroundColor: "primary.light", borderRadius: 1 },
};

const FormMenus = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [assistantTab, setAssistantTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleAssistantTabChange = (event, newValue) => {
    setAssistantTab(newValue);
  };

  // Increase activeSubForm value to change subform pages
  const handleNext = () => {
    setAssistantTab((prevTab) => {
      const newTab = prevTab + 1;
      return newTab <= 2 ? newTab : prevTab;
    });
  };

  // Decrease activeSubForm value to change subform pages
  const handlePrev = () => {
    setAssistantTab((prevTab) => {
      const newTab = prevTab - 1;
      return newTab >= 0 ? newTab : prevTab;
    });
  };

  // Função para lidar com a submissão do formulário do assistente
  const handleAssistantSubmit = (formData) => {
    // Aqui você pode fazer algo com os dados submetidos pelo assistente
    console.log("Dados do assistente sendo submetidos:", formData);
    // Por exemplo, você pode armazenar os dados no estado do componente pai ou realizar outras ações necessárias
  };

  const handleMemberSubmit = (formData) => {
    console.log("Dados de membro sendo submetidos...:", formData);
  };

  const handleBaptismSubmit = (formData) => {
    console.log("Dados de batismo sendo submetidos...:", formData);
  };

  // Função para lidar com a submissão do formulário do componente pai
  const handleSubmit = () => {
    // Realize qualquer lógica de submissão do formulário do componente pai aqui
    console.log("Enviando formulário do componente pai...");
    // ver a questao de o member data ter o seu proprio submit. pode ficar confuso ter os tres aqui e acabar entrelacando os dados
  };

  return (
    <div sx={{ bgColor: "neutral.200" }}>
      {/* Navigation Menu */}
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Member Details" sx={commonTabStyle} />
        <Tab label="Baptism Details" sx={commonTabStyle} />
        <Tab label="Assistant Details" sx={commonTabStyle} />
      </Tabs>
      <Divider sx={{ mb: 2, maxWidth: 960 }}></Divider>
      {selectedTab === 0 && <CreateNewMember onSubmit={handleMemberSubmit} />}
      {selectedTab === 1 && <CreateBaptism onSubmit={handleBaptismSubmit} />}
      {selectedTab === 2 && (
        <Box>
          <Tabs value={assistantTab} onChange={handleAssistantTabChange}>
            <Tab label="Relationship" sx={commonTabStyle} />
            <Tab label="Testemune" sx={commonTabStyle} />
            <Tab label="Agreement" sx={commonTabStyle} />
          </Tabs>
          <Divider sx={{ mb: 2, maxWidth: 960 }}></Divider>

          <CreateAssistant activeSubForm={assistantTab} onSubmit={handleAssistantSubmit} />
          {assistantTab !== 0 && (
            <Button variant="outlined" onClick={handlePrev} sx={{ m: 1, mr: 2, mt: 2 }}>
              Back
            </Button>
          )}
          {assistantTab !== 2 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{ m: 1, mr: 2, mt: 2 }}
            >
              Next
            </Button>
          )}
          {assistantTab === 2 && (
            <Button
              variant="contained"
              color="success"
              sx={{ m: 1, mr: 2, mt: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </Box>
      )}
    </div>
  );
};

export default FormMenus;
