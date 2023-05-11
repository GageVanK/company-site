import {
  createStyles,
  Group,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Space,
  Badge,
  ActionIcon
} from "@mantine/core";
import {
  IconTools,
  IconTool,
  IconLicense,
  IconHomeCheck,
  IconShieldCheckered,
  IconCloudStorm,
  IconBrandInstagram,
  IconBrandFacebook,
  IconPhone
} from "@tabler/icons-react";
import { Slide } from "react-awesome-reveal";

const mockdata = [
  {
    title: "Residential Roofing",
    description:
      "From leaks to complete replacements, we've got you covered. Roofing solutions for every budget.",
    icon: IconHomeCheck
  },
  {
    title: "Contracting",
    description:
      "Building with a passion for perfection. From planning to execution, we'll handle it all. ",
    icon: IconTools
  },
  {
    title: "Quality Repairs",
    description:
      "Efficient, effective, and high-quality repairs. Restoring your property with a focus on longevity.",
    icon: IconTool
  },
  {
    title: "Insurance Restoration",
    description:
      "Bringing your home back to life with quality insurance restoration services. Maximizing your insurance claim for roofing and construction repairs.",
    icon: IconLicense
  },
  {
    title: "Licensed & Insured",
    description:
      "Experience the peace of mind of working with licensed professionals. Insured to protect your property and our team. ",
    icon: IconShieldCheckered
  },
  {
    title: "Storm Damage",
    description:
      "We're here for you when the weather isn't. Experts in storm damage restoration.",
    icon: IconCloudStorm
  }
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24)
    }
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "green",
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    height: "100%",
    width: "100%"
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",

      backgroundColor: "green",
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm
    }
  }
}));

export default function FeatureSection() {
  const { classes, theme } = useStyles();

  const features = mockdata.map((feature) => (
    <Slide cascade>
      <Card
        key={feature.title}
        shadow="md"
        radius="md"
        className={classes.card}
        padding="xl"
        withBorder
      >
        <feature.icon size={rem(50)} stroke={2} color={"green"} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    </Slide>
  ));

  return (
    <Container size="lg">
      <Group position="center">
        <Badge
          variant="gradient"
          gradient={{ from: "lime", to: "green", deg: 105 }}
          size="xl"
          radius="sm"
        >
          Why choose us
        </Badge>
      </Group>

      <Text
        color={"#225465"}
        c="dimmed"
        className={classes.description}
        ta="center"
        mt="md"
      >
        Trust in our licensed, insured, and experienced team for all your
        Roofing & Contracting needs.
      </Text>
      <Space h="xl" />
      <Group spacing={11} position="center" noWrap>
        <ActionIcon
          target="_blank"
          component="a"
          href="https://www.facebook.com/profile.php?id=100090060669297"
          size="lg"
        >
          <IconBrandFacebook size={33} stroke-width={1.5} color={"#225465"} />
        </ActionIcon>

        <ActionIcon
          target="_blank"
          component="a"
          href="https://www.instagram.com/otownsolutions/"
          size="lg"
        >
          <IconBrandInstagram size={33} stroke-width={1.5} color={"#225465"} />
        </ActionIcon>
        <ActionIcon
          target="_blank"
          component="a"
          href="tel:+14079424763"
          size="lg"
        >
          <IconPhone size={33} stroke-width={1.5} color={"#225465"} />
        </ActionIcon>
      </Group>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
