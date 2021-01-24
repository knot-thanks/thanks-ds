import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { Props } from "./";

export default {
  title: "Atoms / Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {};
