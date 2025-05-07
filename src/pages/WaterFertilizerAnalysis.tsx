
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
  ScatterChart,
  Scatter,
  ZAxis,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Droplet, Leaf } from 'lucide-react';

// Updated mock data for water usage impact - removed cost
const waterUsageData = [
  { level: 'Low (30%)', yield: 40, quality: 65 },
  { level: 'Medium (60%)', yield: 85, quality: 90 },
  { level: 'High (90%)', yield: 95, quality: 80 },
  { level: 'Excessive (120%)', yield: 90, quality: 65 },
];

// Updated mock data for fertilizer usage impact - removed cost, added environmental
const fertilizerUsageData = [
  { level: 'Low (30%)', yield: 50, quality: 80, environmental: 10 },
  { level: 'Medium (60%)', yield: 90, quality: 95, environmental: 30 },
  { level: 'High (90%)', yield: 100, quality: 75, environmental: 60 },
  { level: 'Excessive (120%)', yield: 95, quality: 60, environmental: 90 },
];

// Updated mock data for resource optimization with more accurate values
const resourceOptimizationData = [
  { name: 'Current Usage', water: 100, fertilizer: 100, yield: 85 },
  { name: 'Greedy Algorithm', water: 82, fertilizer: 85, yield: 89 },
  { name: 'A* Algorithm', water: 75, fertilizer: 80, yield: 92 },
  { name: 'Genetic Algorithm', water: 70, fertilizer: 78, yield: 96 },
];

// Updated mock data for yield correlation with more data points
const yieldCorrelationData = [
  { water: 30, fertilizer: 20, yield: 35, z: 1 },
  { water: 40, fertilizer: 30, yield: 48, z: 1 },
  { water: 50, fertilizer: 40, yield: 62, z: 1 },
  { water: 60, fertilizer: 50, yield: 75, z: 1 },
  { water: 70, fertilizer: 60, yield: 83, z: 1 },
  { water: 80, fertilizer: 70, yield: 90, z: 1 },
  { water: 90, fertilizer: 80, yield: 95, z: 1 },
  { water: 100, fertilizer: 90, yield: 98, z: 1 },
  { water: 110, fertilizer: 100, yield: 99, z: 1 },
  { water: 120, fertilizer: 110, yield: 99.5, z: 1 },
];

// Updated mock data for seasonal usage
const seasonalUsageData = [
  { month: 'Jan', water: 10, fertilizer: 5 },
  { month: 'Feb', water: 15, fertilizer: 10 },
  { month: 'Mar', water: 25, fertilizer: 15 },
  { month: 'Apr', water: 40, fertilizer: 25 },
  { month: 'May', water: 60, fertilizer: 40 },
  { month: 'Jun', water: 80, fertilizer: 50 },
  { month: 'Jul', water: 95, fertilizer: 45 },
  { month: 'Aug', water: 85, fertilizer: 35 },
  { month: 'Sep', water: 70, fertilizer: 30 },
  { month: 'Oct', water: 55, fertilizer: 25 },
  { month: 'Nov', water: 30, fertilizer: 15 },
  { month: 'Dec', water: 15, fertilizer: 10 },
];

const WaterFertilizerAnalysis = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Water & Fertilizer Usage Analysis</h1>
        <p className="text-gray-600">
          Impact of water and fertilizer usage on crop yield and farm efficiency
        </p>
      </div>

      <Tabs defaultValue="water" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="water">Water Impact</TabsTrigger>
          <TabsTrigger value="fertilizer">Fertilizer Impact</TabsTrigger>
          <TabsTrigger value="optimization">Algorithm Comparison</TabsTrigger>
          <TabsTrigger value="correlation">Yield Correlation</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Usage</TabsTrigger>
        </TabsList>
        
        {/* Water Impact Tab */}
        <TabsContent value="water">
          <Card>
            <CardHeader>
              <CardTitle>Water Usage Impact</CardTitle>
              <CardDescription>Effect of different water usage levels on crop yield and quality</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ChartContainer
                config={{
                  yield: { label: "Crop Yield", color: "#4CAF50" },
                  quality: { label: "Crop Quality", color: "#0EA5E9" },
                }}
              >
                <BarChart
                  data={waterUsageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="level" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent formatter={(value) => `${value}%`} />} />
                  <Legend />
                  <Bar dataKey="yield" fill="#4CAF50" name="Crop Yield (%)" />
                  <Bar dataKey="quality" fill="#0EA5E9" name="Crop Quality (%)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Fertilizer Impact Tab */}
        <TabsContent value="fertilizer">
          <Card>
            <CardHeader>
              <CardTitle>Fertilizer Usage Impact</CardTitle>
              <CardDescription>Effect of different fertilizer usage levels on yield, quality, and environmental impact</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ChartContainer
                config={{
                  yield: { label: "Crop Yield", color: "#4CAF50" },
                  quality: { label: "Crop Quality", color: "#0EA5E9" },
                  environmental: { label: "Environmental Impact", color: "#F44336" },
                }}
              >
                <BarChart
                  data={fertilizerUsageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="level" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent formatter={(value) => `${value}%`} />} />
                  <Legend />
                  <Bar dataKey="yield" fill="#4CAF50" name="Crop Yield (%)" />
                  <Bar dataKey="quality" fill="#0EA5E9" name="Crop Quality (%)" />
                  <Bar dataKey="environmental" fill="#F44336" name="Environmental Impact (%)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Algorithm Comparison Tab */}
        <TabsContent value="optimization">
          <Card>
            <CardHeader>
              <CardTitle>Algorithm Performance Comparison</CardTitle>
              <CardDescription>Comparing current usage with optimized recommendations from different algorithms</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ChartContainer
                config={{
                  water: { label: "Water Usage", icon: Droplet, color: "#0EA5E9" },
                  fertilizer: { label: "Fertilizer Usage", icon: Leaf, color: "#4CAF50" },
                  yield: { label: "Crop Yield", color: "#FFC107" },
                }}
              >
                <BarChart
                  data={resourceOptimizationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent formatter={(value) => `${value}%`} />} />
                  <Legend />
                  <Bar dataKey="water" fill="#0EA5E9" name="Water Usage (%)" />
                  <Bar dataKey="fertilizer" fill="#4CAF50" name="Fertilizer Usage (%)" />
                  <Bar dataKey="yield" fill="#FFC107" name="Crop Yield (%)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Yield Correlation Tab */}
        <TabsContent value="correlation">
          <Card>
            <CardHeader>
              <CardTitle>Water-Fertilizer-Yield Correlation</CardTitle>
              <CardDescription>Relationship between water usage, fertilizer application, and crop yield</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid />
                  <XAxis 
                    type="number" 
                    dataKey="water" 
                    name="Water Usage" 
                    unit="%" 
                    domain={[0, 120]}
                    label={{ value: 'Water Usage (%)', position: 'bottom', offset: 0 }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="fertilizer" 
                    name="Fertilizer Usage" 
                    unit="%" 
                    domain={[0, 120]}
                    label={{ value: 'Fertilizer Usage (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <ZAxis 
                    type="number" 
                    dataKey="z" 
                    range={[100, 1000]} 
                    name="Bubble Size" 
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    formatter={(value, name) => {
                      if (name === 'Water Usage' || name === 'Fertilizer Usage') {
                        return [`${value}%`, name];
                      }
                      return [value, name];
                    }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
                            <p><b>Water:</b> {data.water}%</p>
                            <p><b>Fertilizer:</b> {data.fertilizer}%</p>
                            <p><b>Yield:</b> {data.yield}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter 
                    name="Yield Correlation" 
                    data={yieldCorrelationData} 
                    fill="#4CAF50"
                    shape={(props) => {
                      const { cx, cy, payload } = props;
                      const size = payload.yield / 3; // Scale bubble size based on yield
                      
                      return (
                        <circle 
                          cx={cx} 
                          cy={cy} 
                          r={size} 
                          fill="#4CAF50" 
                          fillOpacity={0.6}
                          stroke="#4CAF50"
                        />
                      );
                    }}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Seasonal Usage Tab */}
        <TabsContent value="seasonal">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Resource Usage</CardTitle>
              <CardDescription>Water and fertilizer usage patterns throughout the year</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ChartContainer
                config={{
                  water: { label: "Water Usage", icon: Droplet, color: "#0EA5E9" },
                  fertilizer: { label: "Fertilizer Usage", icon: Leaf, color: "#4CAF50" },
                }}
              >
                <AreaChart
                  data={seasonalUsageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="water" 
                    stackId="1" 
                    stroke="#0EA5E9" 
                    fill="#0EA5E9" 
                    fillOpacity={0.6}
                    name="Water Usage (%)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="fertilizer" 
                    stackId="2"
                    stroke="#4CAF50" 
                    fill="#4CAF50" 
                    fillOpacity={0.6}
                    name="Fertilizer Usage (%)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WaterFertilizerAnalysis;
