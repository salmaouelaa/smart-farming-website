
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const FarmForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState<string>("land");

  // Form state
  const [landData, setLandData] = useState({
    size: "",
    soilType: "",
    location: "",
    climate: "",
  });

  const [cropData, setCropData] = useState({
    cropType: "",
    growthStage: "",
    plantingDate: "",
    expectedHarvestDate: "",
  });

  const [resourceData, setResourceData] = useState({
    waterSource: "",
    waterAvailability: "",
    currentWaterUsage: "",
    fertilizerType: "",
    currentFertilizerUsage: "",
  });

  const handleLandDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLandData({
      ...landData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCropDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCropData({
      ...cropData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResourceDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResourceData({
      ...resourceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string, section: string, field: string) => {
    if (section === "land") {
      setLandData({
        ...landData,
        [field]: value,
      });
    } else if (section === "crop") {
      setCropData({
        ...cropData,
        [field]: value,
      });
    } else if (section === "resource") {
      setResourceData({
        ...resourceData,
        [field]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Combine all data
    const formData = {
      land: landData,
      crop: cropData,
      resources: resourceData,
    };
    
    // In a real application, we would send this data to the backend
    console.log("Form submitted with data:", formData);
    
    toast({
      title: "Analysis Request Submitted",
      description: "Your farm data is being processed. Redirecting to results.",
    });
    
    // Simulate processing delay before redirecting to results
    setTimeout(() => {
      navigate('/resource-dashboard');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Farm Analysis Form</h1>
          <p className="text-gray-600">
            Enter your farm details to receive an optimized resource management plan
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Farm Information</CardTitle>
            <CardDescription>
              Provide accurate information for the best optimization results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Tabs value={formStep} onValueChange={setFormStep} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="land">Land Details</TabsTrigger>
                  <TabsTrigger value="crop">Crop Information</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                
                {/* Land Details */}
                <TabsContent value="land" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="size">Land Size (acres)</Label>
                      <Input 
                        id="size"
                        name="size"
                        placeholder="e.g., 10"
                        value={landData.size}
                        onChange={handleLandDataChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="soilType">Soil Type</Label>
                      <Select 
                        value={landData.soilType}
                        onValueChange={(value) => handleSelectChange(value, "land", "soilType")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select soil type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clay">Clay</SelectItem>
                          <SelectItem value="sandy">Sandy</SelectItem>
                          <SelectItem value="silty">Silty</SelectItem>
                          <SelectItem value="loamy">Loamy</SelectItem>
                          <SelectItem value="peaty">Peaty</SelectItem>
                          <SelectItem value="chalky">Chalky</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location/Region</Label>
                      <Input 
                        id="location"
                        name="location"
                        placeholder="e.g., Midwest"
                        value={landData.location}
                        onChange={handleLandDataChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="climate">Climate Zone</Label>
                      <Select 
                        value={landData.climate}
                        onValueChange={(value) => handleSelectChange(value, "land", "climate")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select climate zone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tropical">Tropical</SelectItem>
                          <SelectItem value="dry">Dry</SelectItem>
                          <SelectItem value="temperate">Temperate</SelectItem>
                          <SelectItem value="continental">Continental</SelectItem>
                          <SelectItem value="polar">Polar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={() => setFormStep("crop")}
                      className="bg-farm-green hover:bg-farm-lightGreen"
                    >
                      Next: Crop Information
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Crop Information */}
                <TabsContent value="crop" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cropType">Crop Type</Label>
                      <Select 
                        value={cropData.cropType}
                        onValueChange={(value) => handleSelectChange(value, "crop", "cropType")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corn">Corn</SelectItem>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="soybeans">Soybeans</SelectItem>
                          <SelectItem value="rice">Rice</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="fruits">Fruits</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="growthStage">Current Growth Stage</Label>
                      <Select 
                        value={cropData.growthStage}
                        onValueChange={(value) => handleSelectChange(value, "crop", "growthStage")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select growth stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seeding">Seeding</SelectItem>
                          <SelectItem value="vegetative">Vegetative Growth</SelectItem>
                          <SelectItem value="flowering">Flowering</SelectItem>
                          <SelectItem value="fruiting">Fruiting</SelectItem>
                          <SelectItem value="maturity">Maturity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="plantingDate">Planting Date</Label>
                      <Input 
                        id="plantingDate"
                        name="plantingDate"
                        type="date"
                        value={cropData.plantingDate}
                        onChange={handleCropDataChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expectedHarvestDate">Expected Harvest Date</Label>
                      <Input 
                        id="expectedHarvestDate"
                        name="expectedHarvestDate"
                        type="date"
                        value={cropData.expectedHarvestDate}
                        onChange={handleCropDataChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setFormStep("land")}
                    >
                      Back: Land Details
                    </Button>
                    <Button 
                      type="button"
                      className="bg-farm-green hover:bg-farm-lightGreen"
                      onClick={() => setFormStep("resources")}
                    >
                      Next: Resources
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Resources */}
                <TabsContent value="resources" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="waterSource">Water Source</Label>
                      <Select 
                        value={resourceData.waterSource}
                        onValueChange={(value) => handleSelectChange(value, "resource", "waterSource")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select water source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="well">Well Water</SelectItem>
                          <SelectItem value="rain">Rain Water Harvesting</SelectItem>
                          <SelectItem value="river">River/Stream</SelectItem>
                          <SelectItem value="municipal">Municipal Supply</SelectItem>
                          <SelectItem value="pond">Pond/Lake</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="waterAvailability">Water Availability (gallons/day)</Label>
                      <Input 
                        id="waterAvailability"
                        name="waterAvailability"
                        placeholder="e.g., 1000"
                        value={resourceData.waterAvailability}
                        onChange={handleResourceDataChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currentWaterUsage">Current Water Usage (gallons/day)</Label>
                      <Input 
                        id="currentWaterUsage"
                        name="currentWaterUsage"
                        placeholder="e.g., 800"
                        value={resourceData.currentWaterUsage}
                        onChange={handleResourceDataChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fertilizerType">Fertilizer Type</Label>
                      <Select 
                        value={resourceData.fertilizerType}
                        onValueChange={(value) => handleSelectChange(value, "resource", "fertilizerType")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select fertilizer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nitrogen">Nitrogen-based</SelectItem>
                          <SelectItem value="phosphorus">Phosphorus-based</SelectItem>
                          <SelectItem value="potassium">Potassium-based</SelectItem>
                          <SelectItem value="organic">Organic</SelectItem>
                          <SelectItem value="npk">NPK Compound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="currentFertilizerUsage">Current Fertilizer Usage (pounds/acre)</Label>
                      <Input 
                        id="currentFertilizerUsage"
                        name="currentFertilizerUsage"
                        placeholder="e.g., 50"
                        value={resourceData.currentFertilizerUsage}
                        onChange={handleResourceDataChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setFormStep("crop")}
                    >
                      Back: Crop Information
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-farm-green hover:bg-farm-lightGreen"
                    >
                      Submit and Generate Plan
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmForm;
