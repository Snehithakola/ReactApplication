import {  ComponentStory } from "@storybook/react"
import HeaderWithCategories from "./HeaderWithCategory";
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

export default{

    title:'Organisms/HeaderWithCategories',
    component:HeaderWithCategories
} 

const Template : ComponentStory<typeof HeaderWithCategories> = (args) =>  <Router><HeaderWithCategories {...args} /></Router> 

export const HeaderCat = Template.bind({});