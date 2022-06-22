import {  ComponentStory } from "@storybook/react"
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import HeaderBar from "./HeaderBar"

export default{

    title:'Organisms/HeaderBar',
    component:HeaderBar
};

const Template : ComponentStory<typeof HeaderBar> = (args) => <Router><HeaderBar{...args} /></Router>

export const BasicAppBar = Template.bind({});