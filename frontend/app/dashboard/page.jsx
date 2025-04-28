"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, FileSpreadsheet, Check, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [uploadState, setUploadState] = useState("idle")
  const [linkState, setLinkState] = useState("idle")
  const [file, setFile] = useState(null)
  const [linkUrl, setLinkUrl] = useState("")
  const [activeTab, setActiveTab] = useState("upload")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = (e) => {
    e.preventDefault()
    if (!file) return

    setUploadState("uploading")

    // Simulate upload process
    setTimeout(() => {
      setUploadState("success")
    }, 2000)
  }

  const handleLink = (e) => {
    e.preventDefault()
    if (!linkUrl) return

    setLinkState("linking")

    // Simulate linking process
    setTimeout(() => {
      setLinkState("success")
    }, 2000)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-5xl">
        <Link href="/">
          <Button variant="ghost" className="group mb-8">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>

        <div
          className={cn(
            "mb-12 transition-all duration-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">Customer Data Integration</h1>

          <p className="text-lg sm:text-xl text-muted-foreground">
            Connect your customer data to Sonora to start collecting feedback and reviews.
          </p>
        </div>

        <Tabs defaultValue="upload" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList
            className={cn(
              "grid w-full grid-cols-2 mb-8 transition-all duration-500 delay-100",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <TabsTrigger value="upload">Upload Spreadsheet</TabsTrigger>
            <TabsTrigger value="link">Link External Source</TabsTrigger>
          </TabsList>

          <TabsContent
            value="upload"
            className={cn(
              "transition-all duration-500 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Card>
              <CardHeader>
                <CardTitle>Upload Customer Data</CardTitle>
                <CardDescription>Upload your customer data spreadsheet in CSV, XLS, or XLSX format.</CardDescription>
              </CardHeader>

              <CardContent>
                {uploadState === "success" ? (
                  <Alert className="bg-green-500/10 border-green-500/20">
                    <Check className="h-4 w-4 text-green-500" />
                    <AlertTitle>Upload Successful</AlertTitle>
                    <AlertDescription>
                      Your customer data has been successfully uploaded and is being processed.
                    </AlertDescription>
                  </Alert>
                ) : uploadState === "error" ? (
                  <Alert className="bg-destructive/10 border-destructive/20">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <AlertTitle>Upload Failed</AlertTitle>
                    <AlertDescription>There was an error uploading your file. Please try again.</AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleUpload} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="file">Customer Data File</Label>
                      <div
                        className="glass-card rounded-lg p-8 border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <FileSpreadsheet className="h-12 w-12 text-muted-foreground mb-4" />

                        {file ? (
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        ) : (
                          <>
                            <p className="mb-2 font-medium">Drag and drop your file here or click to browse</p>
                            <p className="text-sm text-muted-foreground">
                              Supports CSV, XLS, and XLSX files up to 10MB
                            </p>
                          </>
                        )}

                        <Input
                          id="file"
                          type="file"
                          accept=".csv,.xls,.xlsx"
                          className="hidden"
                          onChange={handleFileChange}
                        />

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("file")?.click()}
                          className="mt-4"
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          Browse Files
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="mapping">Data Mapping</Label>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Data mapping info</span>
                        </Button>
                      </div>
                      <Select defaultValue="default">
                        <SelectTrigger id="mapping">
                          <SelectValue placeholder="Select a mapping template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default Mapping</SelectItem>
                          <SelectItem value="custom">Custom Mapping</SelectItem>
                          <SelectItem value="google">Google Contacts</SelectItem>
                          <SelectItem value="outlook">Outlook Contacts</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Choose how your spreadsheet columns map to our system fields
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Button variant="outline">Cancel</Button>
                {uploadState !== "success" && (
                  <Button onClick={handleUpload} disabled={!file || uploadState === "uploading"}>
                    {uploadState === "uploading" ? "Uploading..." : "Upload Data"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="link"
            className={cn(
              "transition-all duration-500 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Card>
              <CardHeader>
                <CardTitle>Link External Data Source</CardTitle>
                <CardDescription>Connect to an external spreadsheet or database to sync customer data.</CardDescription>
              </CardHeader>

              <CardContent>
                {linkState === "success" ? (
                  <Alert className="bg-green-500/10 border-green-500/20">
                    <Check className="h-4 w-4 text-green-500" />
                    <AlertTitle>Connection Successful</AlertTitle>
                    <AlertDescription>
                      Your external data source has been successfully linked and is syncing.
                    </AlertDescription>
                  </Alert>
                ) : linkState === "error" ? (
                  <Alert className="bg-destructive/10 border-destructive/20">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <AlertTitle>Connection Failed</AlertTitle>
                    <AlertDescription>
                      There was an error linking your data source. Please check the URL and try again.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleLink} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="source">Data Source</Label>
                      <Select defaultValue="google">
                        <SelectTrigger id="source">
                          <SelectValue placeholder="Select a data source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Sheets</SelectItem>
                          <SelectItem value="airtable">Airtable</SelectItem>
                          <SelectItem value="excel">Microsoft Excel Online</SelectItem>
                          <SelectItem value="notion">Notion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="url">Source URL</Label>
                      <div className="flex gap-2">
                        <Input
                          id="url"
                          placeholder="https://docs.google.com/spreadsheets/d/..."
                          value={linkUrl}
                          onChange={(e) => setLinkUrl(e.target.value)}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Enter the URL of your spreadsheet or database</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sync">Sync Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="sync">
                          <SelectValue placeholder="Select sync frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">Real-time</SelectItem>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </form>
                )}
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Button variant="outline">Cancel</Button>
                {linkState !== "success" && (
                  <Button onClick={handleLink} disabled={!linkUrl || linkState === "linking"}>
                    {linkState === "linking" ? "Connecting..." : "Connect Data Source"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div
          className={cn(
            "mt-12 transition-all duration-500 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">What Happens Next?</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="font-heading font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Data Processing</h3>
                <p className="text-muted-foreground">
                  We'll process your customer data and prepare it for use with our AI voice agent.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="font-heading font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Customize Questions</h3>
                <p className="text-muted-foreground">
                  You'll be able to customize the questions and feedback metrics collected during calls.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="font-heading font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Launch Your Campaign</h3>
                <p className="text-muted-foreground">
                  Once everything is set up, you can launch your feedback collection campaign and start gathering
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
