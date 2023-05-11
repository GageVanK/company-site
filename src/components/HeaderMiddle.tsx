import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Image,
  Drawer,
  ScrollArea,
  Divider,
  Text,
  UnstyledButton
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconPhone
} from "@tabler/icons-react";

import otownlogo from "../assets/otownlogo.jpg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 92,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start"
    }
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
      display: "none"
    }
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    }
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "gray.1"
      }).background,
      color: theme.fn.variant({ variant: "light", color: "dark" }).color
    }
  }
}));

const links = [
  { link: "/", label: "Home" },
  { link: "/contactUs", label: "Contact Us" }
];

export default function HeaderMiddle() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx, theme } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Header height={92} mb={22}>
        <Container className={classes.inner}>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
          />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <Group position="center">
            <UnstyledButton component={Link} to="/">
              <Image
                mx="auto"
                mb={11}
                src={otownlogo}
                alt="logo"
                height={100}
                radius="md"
                fit="contain"
              />
            </UnstyledButton>
          </Group>
          <Group spacing={5} className={classes.social} position="right" noWrap>
            <ActionIcon
              target="_blank"
              component="a"
              href="https://www.facebook.com/Ross.Simons.Jewelry"
              size="lg"
            >
              <IconBrandInstagram
                size={22}
                stroke-width={1.5}
                color={"#a3c53b"}
              />
            </ActionIcon>

            <ActionIcon
              target="_blank"
              component="a"
              href="https://www.facebook.com/Ross.Simons.Jewelry"
              size="lg"
            >
              <IconBrandInstagram
                size={22}
                stroke-width={1.5}
                color={"#225465"}
              />
            </ActionIcon>
            <ActionIcon
              target="_blank"
              component="a"
              href="tel:+4079424763"
              size="xl"
            >
              <IconBrandInstagram
                size={22}
                stroke-width={1.5}
                color={"#225465"}
              />
            </ActionIcon>
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={opened}
        onClose={toggle}
        padding="md"
        size="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Group position="center">
            <Image src={otownlogo} alt="logo" width={200} />
          </Group>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link to="/" className={classes.link} onClick={toggle}>
            <Text sx={{ marginLeft: 10 }} align="center">
              Home
            </Text>
          </Link>
          <Link to="/careers" className={classes.link} onClick={toggle}>
            <Text sx={{ marginLeft: 10 }} align="center">
              Careers
            </Text>
          </Link>
          <Link to="/contactUs" className={classes.link} onClick={toggle}>
            <Text sx={{ marginLeft: 10 }} align="center">
              Contact Us
            </Text>
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="sm" px="md">
            <ActionIcon
              target="_blank"
              component="a"
              href="https://www.facebook.com/Ross.Simons.Jewelry"
              size="lg"
            >
              <IconBrandInstagram
                size={22}
                stroke-width={1.5}
                color={"#225465"}
              />
            </ActionIcon>

            <ActionIcon
              target="_blank"
              component="a"
              href="https://www.facebook.com/Ross.Simons.Jewelry"
              size="lg"
            >
              <IconBrandInstagram
                size={22}
                stroke-width={1.5}
                color={"#225465"}
              />
            </ActionIcon>
            <ActionIcon
              target="_blank"
              component="a"
              href="tel:+4079424763"
              size="xl"
            >
              <IconBrandInstagram
                size={22}
                stroke-width={1.5}
                color={"#225465"}
              />
            </ActionIcon>
          </Group>
          <Divider color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
        </ScrollArea>
      </Drawer>
    </>
  );
}
