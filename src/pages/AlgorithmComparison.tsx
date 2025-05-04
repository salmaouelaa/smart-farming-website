
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

// Mock data for algorithm comparison
const algorithmPerformanceData = [
  { name: 'Small Farm', greedy: 80, aStar: 85, ga: 90 },
  { name: 'Medium Farm', greedy: 70, aStar: 82, ga: 88 },
  { name: 'Large Farm', greedy: 65, aStar: 80, ga: 90 },
  { name: 'Complex Terrain', greedy: 60, aStar: 78, ga: 85 },
  { name: 'Multiple Crops', greedy: 65, aStar: 75, ga: 87 },
];

// Mock data for execution time
const executionTimeData = [
  { name: 'Small Farm', greedy: 1.2, aStar: 2.5, ga: 4.8 },
  { name: 'Medium Farm', greedy: 2.3, aStar: 4.7, ga: 8.2 },
  { name: 'Large Farm', greedy: 4.5, aStar: 9.3, ga: 15.1 },
  { name: 'Complex Terrain', greedy: 3.8, aStar: 8.9, ga: 14.3 },
  { name: 'Multiple Crops', greedy: 5.6, aStar: 10.2, ga: 16.5 },
];

// Mock data for algorithm characteristics
const algorithmCharacteristicsData = [
  { subject: 'Efficiency', greedy: 60, aStar: 80, ga: 90 },
  { subject: 'Accuracy', greedy: 65, aStar: 85, ga: 90 },
  { subject: 'Adaptability', greedy: 50, aStar: 75, ga: 95 },
  { subject: 'Scalability', greedy: 80, aStar: 70, ga: 85 },
  { subject: 'Robustness', greedy: 55, aStar: 80, ga: 85 },
];

// Mock data for optimization over iterations
const optimizationData = [
  { iteration: 1, greedy: 60, aStar: 65, ga: 50 },
  { iteration: 2, greedy: 60, aStar: 70, ga: 60 },
  { iteration: 3, greedy: 60, aStar: 75, ga: 68 },
  { iteration: 4, greedy: 60, aStar: 78, ga: 75 },
  { iteration: 5, greedy: 60, aStar: 80, ga: 80 },
  { iteration: 6, greedy: 60, aStar: 80, ga: 83 },
  { iteration: 7, greedy: 60, aStar: 80, ga: 85 },
  { iteration: 8, greedy: 60, aStar: 80, ga: 87 },
  { iteration: 9, greedy: 60, aStar: 80, ga: 89 },
  { iteration: 10, greedy: 60, aStar: 80, ga: 90 },
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
              A simple, fast algorithm that makes locally optimal choices at each step. While quick to execute, it may not find the globally optimal solution for complex resource allocation problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-farm-blue mb-2">A* Algorithm</h3>
            <p className="text-gray-600">
              A more sophisticated pathfinding algorithm that can be adapted for resource optimization. It uses heuristics to find efficient paths to optimal solutions, balancing speed and accuracy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-farm-yellow mb-2">Genetic Algorithm (GA)</h3>
            <p className="text-gray-600">
              An evolutionary algorithm inspired by natural selection. It can find near-optimal solutions for complex problems by simulating evolution across generations of potential solutions.
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
              <CardTitle>Algorithm Performance Comparison</CardTitle>
              <CardDescription>Efficiency score across different farm scenarios (higher is better)</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={algorithmPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} label={{ value: 'Efficiency Score (%)', angle: -90, position: 'insideLeft' }} />
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
              <CardDescription>Processing time required for different scenarios (lower is better)</CardDescription>
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
              <CardTitle>Algorithm Characteristics</CardTitle>
              <CardDescription>Comparison of algorithm strengths across key metrics</CardDescription>
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
              <CardTitle>Optimization Over Iterations</CardTitle>
              <CardDescription>How solution quality improves with more processing time/iterations</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={optimizationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="iteration" />
                  <YAxis domain={[0, 100]} label={{ value: 'Solution Quality (%)', angle: -90, position: 'insideLeft' }} />
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
