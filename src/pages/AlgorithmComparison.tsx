
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

// Updated data for algorithm optimization performance
const algorithmPerformanceData = [
  { name: 'Wheat', greedy: 82, aStar: 88, ga: 93 },
  { name: 'Corn', greedy: 76, aStar: 85, ga: 91 },
  { name: 'Soybean', greedy: 79, aStar: 86, ga: 92 },
  { name: 'Rice', greedy: 74, aStar: 83, ga: 90 },
  { name: 'Potato', greedy: 78, aStar: 86, ga: 91 },
];

// Updated execution time data
const executionTimeData = [
  { name: 'Wheat', greedy: 1.2, aStar: 2.5, ga: 4.8 },
  { name: 'Corn', greedy: 1.5, aStar: 3.2, ga: 5.1 },
  { name: 'Soybean', greedy: 1.4, aStar: 2.9, ga: 5.0 },
  { name: 'Rice', greedy: 1.6, aStar: 3.4, ga: 5.3 },
  { name: 'Potato', greedy: 1.3, aStar: 2.8, ga: 4.9 },
];

// Algorithm characteristics data
const algorithmCharacteristicsData = [
  { subject: 'Water Efficiency', greedy: 75, aStar: 85, ga: 92 },
  { subject: 'Fertilizer Efficiency', greedy: 72, aStar: 84, ga: 90 },
  { subject: 'Adaptability to Constraints', greedy: 65, aStar: 80, ga: 95 },
  { subject: 'Yield Optimization', greedy: 78, aStar: 86, ga: 93 },
  { subject: 'Resource Balance', greedy: 70, aStar: 82, ga: 91 },
];

// Resource utilization efficiency over iterations
const optimizationData = [
  { iteration: 1, greedy: 70, aStar: 72, ga: 65 },
  { iteration: 2, greedy: 70, aStar: 76, ga: 73 },
  { iteration: 3, greedy: 70, aStar: 79, ga: 78 },
  { iteration: 4, greedy: 70, aStar: 81, ga: 82 },
  { iteration: 5, greedy: 70, aStar: 83, ga: 85 },
  { iteration: 6, greedy: 70, aStar: 84, ga: 87 },
  { iteration: 7, greedy: 70, aStar: 85, ga: 89 },
  { iteration: 8, greedy: 70, aStar: 85, ga: 90 },
  { iteration: 9, greedy: 70, aStar: 85, ga: 92 },
  { iteration: 10, greedy: 70, aStar: 85, ga: 93 },
];

const AlgorithmComparison = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Algorithm Comparison</h1>
        <p className="text-gray-600">
          Performance comparison of different optimization algorithms for resource allocation
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <h2 className="text-xl font-semibold mb-4">About the Algorithms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium text-farm-green mb-2">Greedy Algorithm</h3>
            <p className="text-gray-600">
              Makes locally optimal choices at each step without considering the global impact. While fast, it may miss the optimal resource allocation for complex farming scenarios requiring balanced water and fertilizer distribution.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-farm-blue mb-2">A* Algorithm</h3>
            <p className="text-gray-600">
              Uses heuristics to find efficient paths toward optimal solutions, balancing speed and accuracy. It considers multiple factors simultaneously to improve resource allocation efficiency across different crops.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-farm-yellow mb-2">Genetic Algorithm (GA)</h3>
            <p className="text-gray-600">
              Simulates evolution to find near-optimal solutions for complex problems. It excels at discovering resource allocation patterns that maximize crop yield while minimizing waste, adapting to various constraints and crop requirements.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="performance" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="execution-time">Execution Time</TabsTrigger>
          <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>
        
        {/* Performance Tab */}
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Resource Allocation Optimization Performance</CardTitle>
              <CardDescription>Efficiency score across different crops (higher is better)</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={algorithmPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[60, 100]} label={{ value: 'Optimization Efficiency (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="greedy" fill="#795548" name="Greedy Algorithm" />
                  <Bar dataKey="aStar" fill="#03A9F4" name="A* Algorithm" />
                  <Bar dataKey="ga" fill="#4CAF50" name="Genetic Algorithm" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Execution Time Tab */}
        <TabsContent value="execution-time">
          <Card>
            <CardHeader>
              <CardTitle>Algorithm Execution Time</CardTitle>
              <CardDescription>Processing time required for different crops (lower is better)</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={executionTimeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Time (seconds)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `${value} seconds`} />
                  <Legend />
                  <Bar dataKey="greedy" fill="#795548" name="Greedy Algorithm" />
                  <Bar dataKey="aStar" fill="#03A9F4" name="A* Algorithm" />
                  <Bar dataKey="ga" fill="#4CAF50" name="Genetic Algorithm" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Characteristics Tab */}
        <TabsContent value="characteristics">
          <Card>
            <CardHeader>
              <CardTitle>Resource Optimization Characteristics</CardTitle>
              <CardDescription>Comparison of algorithm strengths across key resource optimization metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={150} data={algorithmCharacteristicsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar name="Greedy Algorithm" dataKey="greedy" stroke="#795548" fill="#795548" fillOpacity={0.5} />
                  <Radar name="A* Algorithm" dataKey="aStar" stroke="#03A9F4" fill="#03A9F4" fillOpacity={0.5} />
                  <Radar name="Genetic Algorithm" dataKey="ga" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.5} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Optimization Tab */}
        <TabsContent value="optimization">
          <Card>
            <CardHeader>
              <CardTitle>Resource Utilization Efficiency Over Iterations</CardTitle>
              <CardDescription>How solution quality improves with more processing iterations</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={optimizationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="iteration" />
                  <YAxis domain={[60, 100]} label={{ value: 'Resource Utilization Efficiency (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line type="monotone" dataKey="greedy" stroke="#795548" name="Greedy Algorithm" strokeWidth={2} />
                  <Line type="monotone" dataKey="aStar" stroke="#03A9F4" name="A* Algorithm" strokeWidth={2} />
                  <Line type="monotone" dataKey="ga" stroke="#4CAF50" name="Genetic Algorithm" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlgorithmComparison;
