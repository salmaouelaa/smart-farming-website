
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

// Mock data for resource allocation
const resourceAllocationData = [
  { stage: 'Seeding', water: 20, fertilizer: 15, labor: 10 },
  { stage: 'Vegetative', water: 35, fertilizer: 25, labor: 15 },
  { stage: 'Flowering', water: 40, fertilizer: 30, labor: 20 },
  { stage: 'Fruiting', water: 30, fertilizer: 20, labor: 25 },
  { stage: 'Maturity', water: 15, fertilizer: 10, labor: 15 },
];

// Mock data for resource distribution
const resourceDistributionData = [
  { name: 'Water', value: 40 },
  { name: 'Fertilizer', value: 30 },
  { name: 'Labor', value: 20 },
  { name: 'Equipment', value: 10 },
];

// Mock data for crop comparison
const cropComparisonData = [
  { crop: 'Corn', water: 35, fertilizer: 25, yield: 80 },
  { crop: 'Wheat', water: 25, fertilizer: 20, yield: 60 },
  { crop: 'Soybeans', water: 30, fertilizer: 15, yield: 70 },
  { crop: 'Cotton', water: 40, fertilizer: 30, yield: 85 },
];

// Mock data for yield prediction
const yieldPredictionData = [
  { month: 'Jan', actual: 0, predicted: 0 },
  { month: 'Feb', actual: 0, predicted: 0 },
  { month: 'Mar', actual: 5, predicted: 5 },
  { month: 'Apr', actual: 15, predicted: 15 },
  { month: 'May', actual: 25, predicted: 25 },
  { month: 'Jun', actual: 40, predicted: 40 },
  { month: 'Jul', actual: 65, predicted: 70 },
  { month: 'Aug', actual: 80, predicted: 90 },
  { month: 'Sep', actual: null, predicted: 95 },
  { month: 'Oct', actual: null, predicted: 100 },
  { month: 'Nov', actual: null, predicted: 95 },
  { month: 'Dec', actual: null, predicted: 90 },
];

const COLORS = ['#4CAF50', '#03A9F4', '#FFC107', '#795548'];

const ResourceDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resource Allocation Dashboard</h1>
        <p className="text-gray-600">
          Optimized resource management plan based on your farm data
        </p>
      </div>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="resources">Resources by Stage</TabsTrigger>
          <TabsTrigger value="crops">Crop Comparison</TabsTrigger>
          <TabsTrigger value="yield">Yield Prediction</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Distribution</CardTitle>
                <CardDescription>Optimal allocation of resources for your farm</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resourceDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {resourceDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Resource Allocation by Growth Stage</CardTitle>
                <CardDescription>How resources are distributed across growth stages</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={resourceAllocationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} units`} />
                    <Legend />
                    <Bar dataKey="water" fill="#03A9F4" name="Water" />
                    <Bar dataKey="fertilizer" fill="#4CAF50" name="Fertilizer" />
                    <Bar dataKey="labor" fill="#FFC107" name="Labor" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Resources by Stage Tab */}
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Resource Allocation</CardTitle>
              <CardDescription>Resource usage optimization by growth stage</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={resourceAllocationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={20}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" scale="point" padding={{ left: 50, right: 50 }} />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value} units`} />
                  <Legend />
                  <Bar dataKey="water" fill="#03A9F4" name="Water" />
                  <Bar dataKey="fertilizer" fill="#4CAF50" name="Fertilizer" />
                  <Bar dataKey="labor" fill="#FFC107" name="Labor" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Crop Comparison Tab */}
        <TabsContent value="crops">
          <Card>
            <CardHeader>
              <CardTitle>Crop Resource Comparison</CardTitle>
              <CardDescription>Compare resource usage and yield across different crops</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cropComparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="crop" />
                  <YAxis yAxisId="left" orientation="left" stroke="#03A9F4" />
                  <YAxis yAxisId="right" orientation="right" stroke="#4CAF50" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="water" fill="#03A9F4" name="Water (units)" />
                  <Bar yAxisId="left" dataKey="fertilizer" fill="#4CAF50" name="Fertilizer (units)" />
                  <Bar yAxisId="right" dataKey="yield" fill="#FFC107" name="Yield (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Yield Prediction Tab */}
        <TabsContent value="yield">
          <Card>
            <CardHeader>
              <CardTitle>Yield Prediction</CardTitle>
              <CardDescription>Actual vs. predicted yield throughout the growing season</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={yieldPredictionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#4CAF50" 
                    strokeWidth={2} 
                    name="Actual Yield"
                    connectNulls 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#03A9F4" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    name="Predicted Yield"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceDashboard;
