import { ComponentStory } from "@storybook/react";
import { ExploreNav } from "./ExploreNav";
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

export default {
    title: 'Organisms/Explore Data Nav',
    component: ExploreNav
}

const Template: ComponentStory<typeof ExploreNav> = () => <Router><ExploreNav /></Router>

export const ExploreNav1 = Template.bind({})
ExploreNav1.args = {
    
}