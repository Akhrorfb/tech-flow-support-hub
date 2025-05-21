
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Sample knowledge base articles
const articles = [
  {
    id: 1,
    title: "How to Speed Up Your Computer",
    description: "Simple steps to optimize your PC performance",
    category: "software",
    tags: ["performance", "optimization", "windows", "mac"],
    content: "This comprehensive guide explains how to improve your computer's performance by cleaning up unnecessary files, managing startup programs, and optimizing system settings.",
  },
  {
    id: 2,
    title: "Removing Common Malware and Viruses",
    description: "Step-by-step guide to clean your infected computer",
    category: "software",
    tags: ["security", "virus", "malware", "removal"],
    content: "Learn how to identify and remove various types of malware that might be affecting your computer's performance and security.",
  },
  {
    id: 3,
    title: "Upgrading Your Computer's RAM",
    description: "A beginner's guide to memory upgrades",
    category: "hardware",
    tags: ["hardware", "ram", "upgrade", "performance"],
    content: "This tutorial walks through the process of selecting compatible RAM and installing it in your desktop or laptop computer.",
  },
  {
    id: 4,
    title: "Setting Up a Secure Home Network",
    description: "Protect your home WiFi from intruders",
    category: "networking",
    tags: ["wifi", "network", "security", "router"],
    content: "Learn how to properly configure your home router with the optimal security settings to prevent unauthorized access.",
  },
  {
    id: 5,
    title: "Troubleshooting Common Printer Issues",
    description: "Solutions for paper jams, connectivity problems, and more",
    category: "hardware",
    tags: ["printer", "troubleshooting", "hardware"],
    content: "This guide covers the most common printer problems and offers step-by-step solutions to fix them without calling technical support.",
  },
  {
    id: 6,
    title: "Protecting Your Data with Regular Backups",
    description: "Best practices for keeping your files safe",
    category: "software",
    tags: ["backup", "data", "security", "storage"],
    content: "Learn about different backup strategies and tools to ensure you never lose important documents, photos, or other files.",
  },
];

export default function KnowledgeBasePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter articles based on search term and active category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeTab === "all" || article.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Knowledge Base</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Search our library of articles and guides to solve common tech issues
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <Input
            type="text"
            placeholder="Search for articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            Clear
          </Button>
        </div>

        {/* Tabs for categories */}
        <Tabs defaultValue="all" className="mb-6" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
            <TabsTrigger value="networking">Networking</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Results section */}
        <div className="space-y-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Card key={article.id} className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.content}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex gap-1 flex-wrap">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="mr-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/knowledge/${article.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
