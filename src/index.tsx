import React from "react";
import "./style.css";
import { DashboardLayout } from "./layout"
import ButtonAction from "./components/ButtonAction"
import MainContent from "./components/MainContent"
export const MyComponent = () => <DashboardLayout>
    <ButtonAction />
    <MainContent/>
</DashboardLayout>;
