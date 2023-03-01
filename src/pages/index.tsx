import Head from "next/head";
import {
  Badge,
  Box,
  Card,
  Container,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import NQueensTable from "@/components/NQueensTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>Complexidade</title>
      </Head>
      <main>
        <Container maxWidth={1100} paddingY={20}>
          <Box>
            <Heading mb={5} pl={2}>
              N-Queen
            </Heading>
            <Card bg="gray.800">
              <NQueensTable />
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}
