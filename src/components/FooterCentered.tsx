import { createStyles, Text, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandFacebook,
  IconPhone,
  IconBrandInstagram
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    height: rem(60),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column"
    }
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm
    }
  }
}));

export default function FooterCentered() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>
          <Text fz="sm" c="dimmed">
            © O-Town Solutions. All Rights Reserved.
          </Text>
        </Group>
        <Group spacing="xs" position="right" noWrap>
          <ActionIcon
            target="_blank"
            component="a"
            href="https://www.facebook.com/profile.php?id=100090060669297"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandFacebook size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            target="_blank"
            component="a"
            href="https://www.instagram.com/otownsolutions/"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            target="_blank"
            component="a"
            href="tel:+14079424763"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconPhone size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
