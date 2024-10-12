import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Savings() {
  return (
    <Tabs defaultValue="global" className="p-4">
      <ScrollArea>
        <TabsList>
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="global">Global</TabsContent>
      <TabsContent value="budget">Budget</TabsContent>
      <TabsContent value="others">Others</TabsContent>
    </Tabs>
  )
}
