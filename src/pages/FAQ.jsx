import {
  createStyles,
  Title,
  Container,
  Accordion,
  ThemeIcon,
  MantineProvider,
  getStylesRef,
  Space,
  Center
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 777,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, 
      rgb(1, 50, 32) 
     0%, rgb(169, 227, 75) 100%)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    position: "relative",
    color: theme.black,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`
    }
  },

  title: {
    color: theme.white,
    fontSize: 52,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`
  },

  item: {
    backgroundColor: theme.white,
    borderBottom: 0,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    overflow: "hidden"
  },

  control: {
    fontSize: theme.fontSizes.lg,
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    color: theme.black,

    "&:hover": {
      backgroundColor: "transparent"
    }
  },

  content: {
    paddingLeft: theme.spacing.xl,
    lineHeight: 1.6,
    color: theme.black
  },

  icon: {
    ref: getStylesRef("icon"),
    marginLeft: theme.spacing.md
  },

  gradient: {
    backgroundImage: `linear-gradient(-60deg, 
      rgb(0,100,0)
     0%, rgb(0,100,0) 100%)`
  },

  itemOpened: {
    [`& .${getStylesRef("icon")}`]: {
      transform: "rotate(45deg)"
    }
  },

  button: {
    display: "block",
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      display: "block",
      width: "100%"
    }
  }
}));

export default function FAQ() {
  const { classes } = useStyles();
  return (
    <>
      <Space h={77} />
      <MantineProvider inherit theme={{ colorScheme: "light" }}>
        <Center>
          <div className={classes.wrapper}>
            <Container size="sm">
              <Title align="center" className={classes.title}>
                Frequently Asked Questions
              </Title>

              <Accordion
                chevronPosition="right"
                defaultValue="reset-password"
                chevronSize={50}
                variant="separated"
                disableChevronRotation
                chevron={
                  <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                    <IconPlus size="1.05rem" stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <Accordion.Item className={classes.item} value="reset-password">
                  <Accordion.Control>
                    How often should I have my roof inspected?
                  </Accordion.Control>
                  <Accordion.Panel>
                    It's recommended to have your roof inspected at least once a
                    year, preferably in the spring or fall. This can help
                    identify any potential issues before they become major
                    problems.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                  className={classes.item}
                  value="another-account"
                >
                  <Accordion.Control>
                    How do I know if I need a new roof?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Signs that you may need a new roof include cracked or
                    missing shingles, leaks, water damage, and visible wear and
                    tear. If you're unsure about the condition of your roof,
                    it's best to contact us for a free inspection.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                  <Accordion.Control>
                    What should I do if my property has storm damage?
                  </Accordion.Control>
                  <Accordion.Panel>
                    If you suspect that your property has storm damage, the
                    first step is to contact us for an inspection. We can assess
                    the damage and provide recommendations for repairs or
                    replacement. It's also important to document any damage for
                    insurance purposes.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                  <Accordion.Control>
                    How does the payment process work?
                  </Accordion.Control>
                  <Accordion.Panel>
                    We understand that home improvement projects can be a
                    significant investment. We typically require a deposit
                    upfront to secure your spot in our schedule. The remaining
                    balance will be due upon completion of the project. We
                    accept a range of payment options, including cash, check,
                    and credit card.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                  <Accordion.Control>
                    Do you provide warranties for your work?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Yes, we stand behind our work and offer warranties for our
                    services. The length and terms of the warranty will depend
                    on the specific project and materials used. We'll provide
                    all the details upfront so you can make an informed
                    decision.
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Container>
          </div>
        </Center>
      </MantineProvider>
    </>
  );
}
