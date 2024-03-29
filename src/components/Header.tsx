import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  UnstyledButton,
  Image,
  ActionIcon
} from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import otownlogo from "../assets/otownlogo.jpg";
import { useNavigate } from "react-router-dom";
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 1
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "lime"
      }).background
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "lime"
      }).background,
      color: theme.fn.variant({ variant: "light", color: "lime" }).color
    }
  }
}));

const links = [
  { link: "/", label: "Home" },
  { link: "/contactUs", label: "Contact Us" },
  { link: "/faq", label: "FAQ" }
];

export function HeaderResponsive() {
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

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
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={22} className={classes.root}>
      <Container className={classes.header}>
        <UnstyledButton component={Link} to="/">
          <Image
            mx="auto"
            mb={11}
            src={otownlogo}
            alt="logo"
            height={71}
            radius="md"
            fit="contain"
          />
        </UnstyledButton>
        <Group spacing={5} className={classes.links}>
          {items}

          <ActionIcon
            target="_blank"
            component="a"
            href="tel:+1 4079424763"
            color="lime"
            size="lg"
            radius="xl"
            variant="subtle"
          >
            <IconPhone size="1.625rem" />
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
