import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile } from "./UserProfile";
import { liff } from "@line/liff";
import pictureUrl from ".assets/profile_icon.jpg";

const meta = {
  title: "Liff/UserProfile",
  component: UserProfile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  beforeEach: () => {
    liff.$mock.set({
      getProfile: {
        userId: "U1234567890",
        displayName: "草竹 大輔",
        pictureUrl,
        statusMessage: "お昼休みはもくもくモッキング",
      },
    });
  },
};

export const LoggedOut: Story = {
  beforeEach: () => {
    liff.$mock.set({
      isLoggedIn: false,
    });
  },
};
