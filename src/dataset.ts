/* Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

/**
 * A two dimensional example: x and y coordinates with the label.
 */
export type Example2D = {
  x: number,
  y: number,
  label: number
};

type Point = {
  x: number,
  y: number
};

/**
 * Shuffles the array using Fisher-Yates algorithm. Uses the seedrandom
 * library as the random generator.
 */
export function shuffle(array: any[]): void {
  let counter = array.length;
  let temp = 0;
  let index = 0;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
}

export type DataGenerator = (numSamples: number, noise: number) => Example2D[];

export function ownGenerator(): Example2D[] {
    let points: Example2D[] = [
        {x: -3.224452, y: -3.084927, label:-1},
        {x: -2.383418, y: -1.928900, label:-1},
        {x: 1.772374, y: -3.746821, label:-1},
        {x: 3.848191, y: -3.077476, label:-1},
        {x: 0.487416, y: -1.734890, label:-1},
        {x: 1.586573, y: -2.297308, label:-1},
        {x: 1.118949, y: -2.096646, label:-1},
        {x: 0.791390, y: -0.157472, label:-1},
        {x: 3.284604, y: -2.685564, label:-1},
        {x: -3.394062, y: -3.696380, label:-1},
        {x: 3.908876, y: -3.320567, label:-1},
        {x: 4.214449, y: -2.372180, label:-1},
        {x: 3.871573, y: -2.731519, label:-1},
        {x: 1.184419, y: -2.089808, label:-1},
        {x: 1.128259, y: -2.242728, label:-1},
        {x: 1.017578, y: -0.575200, label:-1},
        {x: -0.459520, y: -0.251096, label:-1},
        {x: 2.879711, y: 0.460171, label:-1},
        {x: 0.682878, y: -0.957586, label:-1},
        {x: 1.815412, y: -4.396101, label:-1},
        {x: 0.902793, y: -1.617620, label:-1},
        {x: 2.659155, y: -0.978387, label:-1},
        {x: 3.897270, y: -2.911219, label:-1},
        {x: 2.678888, y: -3.364673, label:-1},
        {x: 1.528060, y: -2.006207, label:-1},
        {x: 0.176693, y: 1.749262, label:-1},
        {x: 1.288793, y: -2.490956, label:-1},
        {x: 1.485173, y: -2.810272, label:-1},
        {x: 1.946096, y: -3.028419, label:-1},
        {x: -3.294658, y: -3.391813, label:-1},
        {x: -3.874660, y: -0.412209, label:-1},
        {x: -4.080898, y: -5.000000, label:-1},
        {x: 1.778379, y: -3.346106, label:-1},
        {x: -3.664681, y: 1.010246, label:-1},
        {x: -3.275055, y: -2.920002, label:-1},
        {x: -2.893662, y: -2.756018, label:-1},
        {x: 0.305892, y: -2.849663, label:-1},
        {x: 1.952163, y: -2.310141, label:-1},
        {x: -3.750780, y: -0.848915, label:-1},
        {x: 2.365646, y: -0.647101, label:-1},
        {x: 2.837473, y: -0.493221, label:-1},
        {x: 3.846966, y: -2.307718, label:-1},
        {x: -2.896502, y: -2.474850, label:-1},
        {x: -3.067286, y: 3.156396, label:-1},
        {x: 1.093435, y: -1.105396, label:-1},
        {x: 1.134607, y: -2.050203, label:-1},
        {x: 1.327914, y: -1.203412, label:-1},
        {x: 2.158102, y: -3.274063, label:-1},
        {x: -3.520315, y: -2.546223, label:-1},
        {x: 0.876673, y: -0.460694, label:-1},
        {x: -3.232362, y: -0.905694, label:-1},
        {x: -3.110482, y: -2.947745, label:-1},
        {x: -2.882263, y: -3.057795, label:-1},
        {x: 0.963511, y: -0.030766, label:-1},
        {x: -3.380842, y: -3.100622, label:-1},
        {x: -3.274837, y: -1.093177, label:-1},
        {x: 1.147814, y: -0.568468, label:-1},
        {x: -3.523694, y: -3.450957, label:-1},
        {x: 0.985250, y: -2.530406, label:-1},
        {x: -0.073850, y: -1.981168, label:-1},
        {x: 1.177797, y: -1.948003, label:-1},
        {x: 0.915695, y: -0.612822, label:-1},
        {x: -2.204160, y: -2.294376, label:-1},
        {x: -3.229847, y: -1.025998, label:-1},
        {x: -1.266497, y: -4.744418, label:-1},
        {x: 1.328688, y: -1.962153, label:-1},
        {x: -3.123291, y: -2.655018, label:-1},
        {x: 0.815526, y: -0.104808, label:-1},
        {x: 1.413880, y: -1.575670, label:-1},
        {x: 0.994576, y: -0.695287, label:-1},
        {x: 0.909498, y: 0.019742, label:-1},
        {x: 1.611052, y: -3.812274, label:-1},
        {x: 1.841209, y: -2.589439, label:-1},
        {x: -3.315303, y: -2.884137, label:-1},
        {x: 1.499425, y: -0.177082, label:-1},
        {x: 1.186599, y: -2.136929, label:-1},
        {x: -3.254923, y: 0.565979, label:-1},
        {x: 0.671687, y: 0.078839, label:-1},
        {x: 1.598118, y: -1.547096, label:-1},
        {x: 2.906325, y: -1.380095, label:-1},
        {x: 0.304980, y: -2.606976, label:-1},
        {x: -3.398049, y: -4.033492, label:-1},
        {x: 1.067110, y: -1.051569, label:-1},
        {x: -2.644424, y: -1.245331, label:-1},
        {x: 4.199072, y: -1.712810, label:-1},
        {x: 1.484358, y: -1.457330, label:-1},
        {x: 2.067657, y: -3.474767, label:-1},
        {x: 0.327167, y: -2.615452, label:-1},
        {x: 2.793909, y: -3.414045, label:-1},
        {x: 1.944372, y: -1.589287, label:-1},
        {x: 1.454761, y: -1.171250, label:-1},
        {x: 1.168533, y: -2.674739, label:-1},
        {x: 2.966498, y: -0.528393, label:-1},
        {x: 0.295067, y: -2.362358, label:-1},
        {x: 1.500172, y: -1.052754, label:-1},
        {x: 3.432322, y: -1.534602, label:-1},
        {x: -0.028093, y: -1.780688, label:-1},
        {x: 0.679598, y: 0.097051, label:-1},
        {x: 1.080834, y: -0.779234, label:-1},
        {x: 1.004122, y: -0.523790, label:-1},
        {x: 1.664764, y: -2.004814, label:-1},
        {x: 1.393517, y: -1.941956, label:-1},
        {x: -3.860510, y: -2.046570, label:-1},
        {x: 1.369351, y: -1.100512, label:-1},
        {x: 1.039372, y: 1.839303, label:-1},
        {x: -3.448543, y: -2.134190, label:-1},
        {x: 2.319708, y: -1.712009, label:-1},
        {x: 1.698594, y: -1.582178, label:-1},
        {x: -2.573636, y: -1.127490, label:-1},
        {x: 2.348073, y: -3.584577, label:-1},
        {x: 0.280463, y: -2.431698, label:-1},
        {x: 1.754706, y: -3.586070, label:-1},
        {x: 0.362508, y: -2.753239, label:-1},
        {x: 1.514416, y: -1.687582, label:-1},
        {x: 1.221854, y: -1.875049, label:-1},
        {x: 0.371644, y: -2.771192, label:-1},
        {x: -3.706161, y: -2.450394, label:-1},
        {x: -2.625700, y: -3.516484, label:-1},
        {x: -2.944514, y: -2.263299, label:-1},
        {x: 2.550187, y: -1.356579, label:-1},
        {x: 0.105115, y: -1.888758, label:-1},
        {x: 1.442924, y: -1.140426, label:-1},
        {x: 1.351230, y: -1.492535, label:-1},
        {x: 0.429720, y: -1.208400, label:-1},
        {x: -2.948507, y: -2.832213, label:-1},
        {x: -2.987417, y: -3.013025, label:-1},
        {x: 0.387708, y: -2.755835, label:-1},
        {x: 1.598767, y: -2.064353, label:-1},
        {x: 1.738490, y: -1.742745, label:-1},
        {x: -2.628596, y: -1.905527, label:-1},
        {x: -2.674628, y: -2.708807, label:-1},
        {x: 0.841245, y: -1.203756, label:-1},
        {x: 1.788717, y: -1.525920, label:-1},
        {x: 1.738992, y: -1.834771, label:-1},
        {x: 3.781325, y: -2.602180, label:-1},
        {x: 3.430854, y: -1.813749, label:-1},
        {x: 1.984195, y: -3.026116, label:-1},
        {x: 3.727345, y: -3.123034, label:-1},
        {x: 1.689933, y: -1.894464, label:-1},
        {x: -1.874004, y: -2.843506, label:-1},
        {x: -4.206627, y: 3.357858, label:-1},
        {x: 2.974426, y: 0.156803, label:-1},
        {x: 0.933318, y: -3.114405, label:-1},
        {x: 1.549573, y: -2.929043, label:-1},
        {x: -2.004041, y: -2.785953, label:-1},
        {x: 1.475411, y: -2.919727, label:-1},
        {x: -2.375110, y: -2.504626, label:-1},
        {x: -1.977136, y: -2.817258, label:-1},
        {x: -2.354180, y: -3.108869, label:-1},
        {x: -0.068332, y: -2.963520, label:-1},
        {x: 3.797578, y: -2.253871, label:-1},
        {x: 1.108338, y: -2.119485, label:-1},
        {x: 2.042153, y: -3.481788, label:-1},
        {x: 0.884652, y: -2.352756, label:-1},
        {x: -2.464632, y: -3.457655, label:-1},
        {x: 0.738697, y: -1.136782, label:-1},
        {x: 0.391775, y: -2.757036, label:-1},
        {x: -3.650118, y: 0.501833, label:-1},
        {x: -3.104217, y: -2.638618, label:-1},
        {x: -2.672016, y: -1.125677, label:-1},
        {x: -2.138345, y: -2.007767, label:-1},
        {x: -3.211637, y: -1.486736, label:-1},
        {x: 0.627076, y: -0.234189, label:-1},
        {x: -3.968167, y: -2.307032, label:-1},
        {x: -5.000000, y: -1.266534, label:-1},
        {x: -4.962234, y: -1.327666, label:-1},
        {x: -4.246927, y: 5.000000, label:-1},
        {x: -3.085413, y: -3.137980, label:-1},
        {x: 1.531581, y: -1.620313, label:-1},
        {x: 3.298048, y: -2.792251, label:-1},
        {x: 1.262298, y: -3.976387, label:-1},
        {x: -3.766775, y: 0.768251, label:-1},
        {x: 1.484972, y: -2.844151, label:-1},
        {x: -3.331683, y: -1.567091, label:-1},
        {x: 0.805455, y: -1.164751, label:-1},
        {x: -3.219098, y: -0.796784, label:-1},
        {x: 0.843667, y: -1.627030, label:-1},
        {x: 2.077766, y: -2.958129, label:-1},
        {x: 3.957044, y: -3.479536, label:-1},
        {x: 3.891962, y: -2.807017, label:-1},
        {x: 4.661521, y: -2.111750, label:-1},
        {x: -2.229715, y: -3.471896, label:-1},
        {x: 3.636535, y: -2.676089, label:-1},
        {x: 3.367859, y: -2.014262, label:-1},
        {x: 1.084332, y: -1.581345, label:-1},
        {x: -3.035082, y: -4.385828, label:1},
        {x: 0.301720, y: -2.591600, label:1},
        {x: -3.060317, y: -2.500580, label:1},
        {x: 1.645868, y: -2.514234, label:1},
        {x: 1.604475, y: -2.430815, label:1},
        {x: -2.907030, y: -2.247539, label:1},
        {x: -3.241070, y: -3.990386, label:1},
        {x: 4.327945, y: -1.013393, label:1},
        {x: 4.256799, y: -1.080253, label:1},
        {x: 4.283433, y: -1.003905, label:1},
        {x: 4.195231, y: -1.132471, label:1},
        {x: -3.515502, y: 0.522325, label:1},
        {x: -2.703252, y: -2.791808, label:1},
        {x: -2.678090, y: -3.570122, label:1},
        {x: -3.505222, y: -0.101162, label:1},
        {x: 2.848125, y: -1.756621, label:1},
        {x: 1.391202, y: -2.419128, label:1},
        {x: 3.913236, y: -2.762166, label:1},
        {x: 1.722824, y: -2.930837, label:1},
        {x: 1.873622, y: -2.740357, label:1},
        {x: 0.929321, y: -2.635985, label:1},
        {x: 1.738742, y: -2.820202, label:1},
        {x: 3.924212, y: -2.631029, label:1},
        {x: 3.875120, y: -2.430181, label:1},
        {x: 3.915831, y: -2.645347, label:1},
        {x: -3.908251, y: 0.406270, label:1},
        {x: -2.821363, y: -3.471980, label:1},
        {x: -2.920101, y: -3.122710, label:1},
        {x: 1.073537, y: -3.474317, label:1},
        {x: 1.217241, y: -3.221599, label:1},
        {x: -2.778982, y: -3.450453, label:1},
        {x: -4.121107, y: 3.002864, label:1},
        {x: -3.735803, y: -3.426132, label:1},
        {x: -2.602548, y: -4.661754, label:1},
        {x: -2.561981, y: -4.272419, label:1},
        {x: -3.030689, y: -4.442109, label:1},
        {x: -2.926978, y: -4.432975, label:1},
        {x: -2.942599, y: -4.390528, label:1},
        {x: -2.655493, y: -4.754513, label:1},
        {x: 2.950478, y: 0.107076, label:1},
        {x: 2.928751, y: -0.335111, label:1},
        {x: 3.002199, y: -1.327707, label:1},
        {x: 2.838792, y: -0.451815, label:1},
        {x: -2.494961, y: -2.647200, label:1},
        {x: -2.388703, y: -3.587694, label:1},
        {x: -3.312156, y: -2.031173, label:1},
        {x: 2.909848, y: 1.061451, label:1},
        {x: 1.172052, y: -2.686507, label:1},
        {x: -3.830300, y: -3.244423, label:1},
        {x: -2.346209, y: -4.312157, label:1},
        {x: -2.852975, y: -4.193146, label:1},
        {x: -2.738105, y: -4.320955, label:1},
        {x: -2.226098, y: -4.393248, label:1},
        {x: -2.860821, y: -4.158070, label:1},
        {x: -2.579730, y: -3.143359, label:1},
        {x: -3.476502, y: -2.828660, label:1},
        {x: -3.346250, y: -3.962592, label:1},
        {x: -3.534259, y: -4.180745, label:1},
        {x: -2.266762, y: -4.768880, label:1},
        {x: -2.317691, y: -2.368566, label:1},
        {x: -3.864053, y: 1.703220, label:1},
        {x: -2.296493, y: -1.969514, label:1},
        {x: 1.721926, y: -2.956435, label:1},
        {x: 3.999289, y: -2.673235, label:1},
        {x: 1.437876, y: -3.128589, label:1},
        {x: 1.454171, y: -2.399710, label:1},
        {x: 1.480303, y: -2.484042, label:1},
        {x: 1.565959, y: -3.389151, label:1},
        {x: 3.136040, y: -2.922419, label:1},
        {x: 1.556229, y: -2.661342, label:1},
        {x: 1.919406, y: -3.023764, label:1},
        {x: 3.211022, y: -2.832930, label:1},
        {x: 2.935445, y: -1.147427, label:1},
        {x: 1.630506, y: -3.032531, label:1},
        {x: 4.098419, y: -2.903670, label:1},
        {x: 2.082281, y: -3.155443, label:1},
        {x: -3.459177, y: 1.065094, label:1},
        {x: 3.459031, y: 2.130733, label:1},
        {x: 2.913826, y: -1.044558, label:1},
        {x: -2.739322, y: -0.975771, label:1},
        {x: 2.149953, y: -2.764456, label:1},
        {x: 1.303993, y: -2.683044, label:1},
        {x: 2.963210, y: -0.746890, label:1},
        {x: -3.571282, y: -0.673883, label:1},
        {x: -3.563636, y: -0.707997, label:1},
        {x: 2.947548, y: -1.050573, label:1},
        {x: 3.018453, y: -0.860224, label:1},
        {x: 2.069935, y: -2.946125, label:1},
        {x: 2.038532, y: -2.903538, label:1},
        {x: 3.890143, y: -2.416065, label:1},
        {x: 3.707706, y: -2.744279, label:1},
        {x: 3.775719, y: -2.633590, label:1},
        {x: 3.730592, y: -2.714196, label:1},
        {x: 3.512134, y: -2.723211, label:1},
        {x: -3.487288, y: -0.292155, label:1},
        {x: -3.426694, y: -0.427117, label:1},
        {x: -3.668100, y: -2.693060, label:1},
        {x: 3.742591, y: -2.640237, label:1},
        {x: -4.071039, y: -3.455030, label:1},
        {x: 1.822047, y: -1.582408, label:1},
        {x: 2.223755, y: -2.912789, label:1},
        {x: -2.925397, y: -0.000430, label:1},
        {x: -3.437515, y: 0.277791, label:1},
        {x: -3.618576, y: 1.085263, label:1},
        {x: -3.139695, y: -0.379394, label:1},
        {x: -3.315475, y: 0.413353, label:1},
        {x: -2.981309, y: 0.176669, label:1},
        {x: 1.567659, y: -2.632788, label:1},
        {x: 3.007107, y: -2.986068, label:1},
        {x: 0.662442, y: -1.551596, label:1},
        {x: 0.824836, y: -2.392236, label:1},
        {x: -4.037599, y: -1.383599, label:1},
        {x: 0.681951, y: -1.850436, label:1},
        {x: 1.965885, y: -1.951182, label:1},
        {x: 2.062935, y: -2.455118, label:1},
        {x: -3.276463, y: -0.827259, label:1},
        {x: 3.157429, y: -1.009517, label:1},
        {x: -0.620351, y: -2.526257, label:1},
        {x: -2.759952, y: -3.886783, label:1},
        {x: 0.836156, y: -1.809534, label:1},
        {x: 0.957537, y: -2.320945, label:1},
        {x: -3.299442, y: 0.096248, label:1},
        {x: 2.428363, y: -0.829990, label:1},
        {x: -3.600085, y: -2.153882, label:1},
        {x: 2.591731, y: -2.630221, label:1},
        {x: -3.535010, y: -2.918064, label:1},
        {x: -2.826659, y: -4.596624, label:1},
        {x: 2.600870, y: -2.670248, label:1},
        {x: -4.461796, y: -0.251635, label:1},
        {x: -4.158291, y: -3.762356, label:1},
        {x: 1.754605, y: -3.081657, label:1},
        {x: -3.264320, y: -2.308893, label:1},
        {x: 0.117249, y: 3.098477, label:1},
        {x: 3.412494, y: -2.396082, label:1},
        {x: 3.638000, y: -2.271886, label:1},
        {x: 3.395361, y: -2.493120, label:1},
        {x: 3.626952, y: -2.357591, label:1},
        {x: 5.000000, y: -2.136265, label:1},
        {x: 4.109453, y: -1.910633, label:1},
        {x: 2.088897, y: -3.162361, label:1},
        {x: 1.729103, y: -3.532997, label:1},
        {x: -2.936257, y: -2.444321, label:1},
        {x: 1.158940, y: -3.068995, label:1},
        {x: -3.338956, y: 1.571145, label:1},
        {x: 3.907863, y: -2.170239, label:1},
        {x: 3.787533, y: -2.724933, label:1},
        {x: -2.748048, y: -4.207298, label:1},
        {x: -3.255898, y: -4.158088, label:1},
        {x: -2.690254, y: -4.520413, label:1},
        {x: 1.651698, y: -3.229221, label:1},
        {x: 1.622854, y: -3.010910, label:1},
        {x: 1.440319, y: -3.631196, label:1},
        {x: 1.661749, y: -3.132037, label:1},
        {x: 2.863418, y: -0.966768, label:1},
        {x: 2.915164, y: -1.477957, label:1},
        {x: 1.063314, y: -3.000971, label:1},
        {x: 1.063839, y: -2.707785, label:1},
        {x: 1.091415, y: -2.290978, label:1},
        {x: -3.386682, y: -3.228018, label:1},
        {x: -3.430946, y: 0.121089, label:1},
        {x: -3.505295, y: -3.471714, label:1},
        {x: -4.677827, y: -0.307378, label:1},
        {x: -3.716117, y: -3.347900, label:1},
        {x: -4.224584, y: -3.057014, label:1},
        {x: 1.071722, y: -2.661974, label:1},
        {x: 2.553132, y: -1.642882, label:1},
        {x: 0.389339, y: -2.712471, label:1},
        {x: 0.979206, y: -0.439802, label:1},
        {x: 1.878867, y: -2.997976, label:1},
        {x: 1.860760, y: -3.269716, label:1},
        {x: 1.751918, y: -2.353998, label:1},
        {x: 2.023250, y: -3.180575, label:1},
        {x: 1.805981, y: -2.273953, label:1},
        {x: 1.704088, y: -1.950523, label:1},
        {x: 2.067783, y: -2.794730, label:1},
        {x: 1.792646, y: -2.095587, label:1},
        {x: 1.957184, y: -2.952886, label:1},
        {x: 1.960537, y: -2.702729, label:1},
        {x: 1.833845, y: -2.832770, label:1},
        {x: 1.723038, y: -3.125571, label:1},
        {x: 1.975985, y: -3.218114, label:1},
        {x: 1.790086, y: -1.940784, label:1},
        {x: 2.086854, y: -3.075881, label:1},
        {x: 1.709130, y: -2.044600, label:1},
        {x: 1.895877, y: -3.135387, label:1}
    ];
    return points;
}

export function classifyTwoGaussData(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  let varianceScale = d3.scale.linear().domain([0, .5]).range([0.5, 4]);
  let variance = varianceScale(noise);

  function genGauss(cx: number, cy: number, label: number) {
    for (let i = 0; i < numSamples / 2; i++) {
      let x = normalRandom(cx, variance);
      let y = normalRandom(cy, variance);
      points.push({x, y, label});
    }
  }

  genGauss(2, 2, 1); // Gaussian with positive examples.
  genGauss(-2, -2, -1); // Gaussian with negative examples.
  return points;
}

export function regressPlane(numSamples: number, noise: number):
  Example2D[] {
  let radius = 6;
  let labelScale = d3.scale.linear()
    .domain([-10, 10])
    .range([-1, 1]);
  let getLabel = (x, y) => labelScale(x + y);

  let points: Example2D[] = [];
  for (let i = 0; i < numSamples; i++) {
    let x = randUniform(-radius, radius);
    let y = randUniform(-radius, radius);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getLabel(x + noiseX, y + noiseY);
    points.push({x, y, label});
  }
  return points;
}

export function regressGaussian(numSamples: number, noise: number):
  Example2D[] {
  let points: Example2D[] = [];

  let labelScale = d3.scale.linear()
    .domain([0, 2])
    .range([1, 0])
    .clamp(true);

  let gaussians = [
    [-4, 2.5, 1],
    [0, 2.5, -1],
    [4, 2.5, 1],
    [-4, -2.5, -1],
    [0, -2.5, 1],
    [4, -2.5, -1]
  ];

  function getLabel(x, y) {
    // Choose the one that is maximum in abs value.
    let label = 0;
    gaussians.forEach(([cx, cy, sign]) => {
      let newLabel = sign * labelScale(dist({x, y}, {x: cx, y: cy}));
      if (Math.abs(newLabel) > Math.abs(label)) {
        label = newLabel;
      }
    });
    return label;
  }
  let radius = 6;
  for (let i = 0; i < numSamples; i++) {
    let x = randUniform(-radius, radius);
    let y = randUniform(-radius, radius);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getLabel(x + noiseX, y + noiseY);
    points.push({x, y, label});
  };
  return points;
}

export function classifySpiralData(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];
  let n = numSamples / 2;

  function genSpiral(deltaT: number, label: number) {
    for (let i = 0; i < n; i++) {
      let r = i / n * 5;
      let t = 1.75 * i / n * 2 * Math.PI + deltaT;
      let x = r * Math.sin(t) + randUniform(-1, 1) * noise;
      let y = r * Math.cos(t) + randUniform(-1, 1) * noise;
      points.push({x, y, label});
    }
  }

  genSpiral(0, 1); // Positive examples.
  genSpiral(Math.PI, -1); // Negative examples.
  return points;
}

export function classifyCircleData(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];
  let radius = 5;
  function getCircleLabel(p: Point, center: Point) {
    return (dist(p, center) < (radius * 0.5)) ? 1 : -1;
  }

  // Generate positive points inside the circle.
  for (let i = 0; i < numSamples / 2; i++) {
    let r = randUniform(0, radius * 0.5);
    let angle = randUniform(0, 2 * Math.PI);
    let x = r * Math.sin(angle);
    let y = r * Math.cos(angle);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getCircleLabel({x: x + noiseX, y: y + noiseY}, {x: 0, y: 0});
    points.push({x, y, label});
  }

  // Generate negative points outside the circle.
  for (let i = 0; i < numSamples / 2; i++) {
    let r = randUniform(radius * 0.7, radius);
    let angle = randUniform(0, 2 * Math.PI);
    let x = r * Math.sin(angle);
    let y = r * Math.cos(angle);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getCircleLabel({x: x + noiseX, y: y + noiseY}, {x: 0, y: 0});
    points.push({x, y, label});
  }
  return points;
}

export function classifyXORData(numSamples: number, noise: number):
    Example2D[] {
  function getXORLabel(p: Point) { return p.x * p.y >= 0 ? 1 : -1; }

  let points: Example2D[] = [];
  for (let i = 0; i < numSamples; i++) {
    let x = randUniform(-5, 5);
    let padding = 0.3;
    x += x > 0 ? padding : -padding;  // Padding.
    let y = randUniform(-5, 5);
    y += y > 0 ? padding : -padding;
    let noiseX = randUniform(-5, 5) * noise;
    let noiseY = randUniform(-5, 5) * noise;
    let label = getXORLabel({x: x + noiseX, y: y + noiseY});
    points.push({x, y, label});
  }
  return points;
}

/**
 * Returns a sample from a uniform [a, b] distribution.
 * Uses the seedrandom library as the random generator.
 */
function randUniform(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

/**
 * Samples from a normal distribution. Uses the seedrandom library as the
 * random generator.
 *
 * @param mean The mean. Default is 0.
 * @param variance The variance. Default is 1.
 */
function normalRandom(mean = 0, variance = 1): number {
  let v1: number, v2: number, s: number;
  do {
    v1 = 2 * Math.random() - 1;
    v2 = 2 * Math.random() - 1;
    s = v1 * v1 + v2 * v2;
  } while (s > 1);

  let result = Math.sqrt(-2 * Math.log(s) / s) * v1;
  return mean + Math.sqrt(variance) * result;
}

/** Returns the eucledian distance between two points in space. */
function dist(a: Point, b: Point): number {
  let dx = a.x - b.x;
  let dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
