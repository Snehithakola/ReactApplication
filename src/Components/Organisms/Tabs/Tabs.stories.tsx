import { ComponentStory } from "@storybook/react"
import { TabsRest } from "./Tabs"
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

export default {
    title: 'Organisms/Tabs',
    component: TabsRest
}

const Template: ComponentStory<typeof TabsRest> = () => <Router><TabsRest /></Router>

export const RequiredTabs = Template.bind({})
RequiredTabs.args = {

}