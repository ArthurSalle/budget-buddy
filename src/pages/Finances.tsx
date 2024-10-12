import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Finances() {
  return (
    <Tabs defaultValue="income" className="p-4">
      <ScrollArea>
        <TabsList>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="income">Income</TabsContent>
      <TabsContent value="expenses">Expenses</TabsContent>
      <TabsContent value="transactions">Transactions</TabsContent>
      <TabsContent value="others">Others</TabsContent>
    </Tabs>
  )
}
