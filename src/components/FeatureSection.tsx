import {
  createStyles,
  Button,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Space,
  Center
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Residential Roofing",
    description:
      "From leaks to complete replacements, we've got you covered. Roofing solutions for every budget.",
    icon: IconGauge
  },
  {
    title: "Contracting",
    description:
      "Building with a passion for perfection. From planning to execution, we'll handle it all. ",
    icon: IconUser
  },
  {
    title: "Quality Repairs",
    description:
      "Efficient, effective, and high-quality repairs. Restoring you property with a focus on longevity and durability.",
    icon: IconCookie
  },
  {
    title: "Insurance restoration",
    description:
      "Bringing your home back to life with quality insurance restoration services. Maximizing your insurance claim for roofing and construction repairs.",
    icon: IconUser
  },
  {
    title: "Licensed & Insured",
    description:
      "Experience the peace of mind of working with licensed professionals. Insured to protect your property and our team. ",
    icon: IconUser
  },
  {
    title: "Storm Damage",
    description:
      "We're here for you when the weather isn't. Experts in storm damage restoration.",
    icon: IconUser
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
    }`
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
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={"green"} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Center>
        <Button variant="filled" size="lg" color="lime">
          Request Free Consultation
        </Button>
        <Space h={111} />
      </Center>

      <Title
        color={"#225465"}
        order={2}
        className={classes.title}
        ta="center"
        mt="sm"
      >
        Why Choose Us
      </Title>

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
