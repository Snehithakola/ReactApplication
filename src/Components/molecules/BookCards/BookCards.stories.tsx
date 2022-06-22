import { Story } from "@storybook/react";
import {BookCard,BookCardProps } from "./Bookcards";
import beingBoss from '../../../images/beingBoss.svg'
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

export default {
    title: 'Molecules/Card',
    component: BookCard
}

let Template: Story<BookCardProps> = args => <Router><BookCard {...args} /></Router>

export const BookCard1 = Template.bind({})
BookCard1.args = {
    image: beingBoss,
    title: "Being Boss",
    author: 'Kathleen Shannon and Emily...',
    timeToRead: '13-minute read',
    numberOfReads: '1.9k reads',
    addToLibrary: true,
    value: 11,
}