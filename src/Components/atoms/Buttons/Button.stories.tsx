import { Story } from "@storybook/react";
import { ButtonComponent, Props } from "./Button";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
    title: "Atoms/Buttons",
    component: ButtonComponent
}

const Template: Story<Props> = args => <ButtonComponent {...args} />

export const AddToLibraryButtonHoverState = Template.bind({})
AddToLibraryButtonHoverState.args = {
    variant: 'contained',
    startIcon: <AddIcon />,
    style: {
        backgroundColor: '#0365F2',
        color: 'white',
        textTransform: 'none'
    },
    children: 'Add to library'
}

export const FinishedButtonHoverState = Template.bind({})
FinishedButtonHoverState.args = {
    variant: 'contained',
    //startIcon: <AddIcon />,
    style: {
        backgroundColor: '#0365F2',
        color: 'white',
        textTransform: 'none'
    },
    children: 'Finished'
}

export const ReadAgainButtonHoverState = Template.bind({})
ReadAgainButtonHoverState.args = {
    variant: 'contained',
    //startIcon: <AddIcon />,
    style: {
        backgroundColor: '#0365F2',
        color: 'white',
        textTransform: 'none'
    },
    children: 'Read again'
}

