import { Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

const BaseLayout = ({ header, main, footer }: Props) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
      gridTemplateRows={'4.5rem 1fr auto'}
      h="100vh"
      gap="1"
    >
      <GridItem area={'header'}>{header}</GridItem>
      <GridItem area={'main'}>{main}</GridItem>
      <GridItem area={'footer'}>{footer}</GridItem>
    </Grid>
  );
};

export default BaseLayout;