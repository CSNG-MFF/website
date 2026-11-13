---
layout: default
title: Research
---

## Courses

- <a href="./programovani1.html"><span>NPRG030: Cvičení z Programování I</span></a>
- <a href="./programovani2.html"><span>NPRG031: Cvičení z Programování II</span></a>
- <a href="./ikv1.html"><span>NAIL087: Introduction to Computational Neuroscience I</span></a>
- <a href="./ikv2.html"><span>NAIL088: Introduction to Computational Neuroscience II</span></a>
- <a href="./compneuroseminar.html"><span>NAIL128: Computational neuroscience seminar</span></a>
<br>

## Available student projects

Would you like to contribute to our research? This is a list of projects available for interested students.
Most are designed to be completed within 3 to 6 month, but some can be expanded into longer projects, even
full PhD scope. If you are interested in working on any of the projects please contact [Ján Antolík](antolikjan@gmail.com).

If you want to get to know us, stop by at the Computational neuroscience seminar [NAIL128](./compneuroseminar.html) and have a chat with us.


<!-- janctx:student-projects:start -->

<style>
.janctx-project-category {
  font-size: 1.2rem;
  font-weight: 700;
  color: #243b53;
  margin: 1.5em 0 0.5em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #dce3ea;
}
.janctx-project { margin: 0.15em 0; }
.janctx-project > summary {
  display: list-item;
  cursor: pointer;
  color: #005ea8;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  font-weight: 600;
  padding: 0.12em 0;
}
.janctx-project > summary:hover { color: #003b6a; }
.janctx-project > summary:focus-visible {
  outline: 2px solid #005ea8;
  outline-offset: 3px;
}
</style>

Select a project title to show or hide its description.

<h4 class="janctx-project-category">Simulation of cortical implants for vision restoration</h4>

<details class="janctx-project" id="project-3e7305947349214bc1a6">
<summary>Characterizing the spatiotemporal activation profile of different neuron types for optogenetic stimulation</summary>

<p>New approaches to sensory prosthetics are being developed, wherby the cortex is stimulated via opto-genetic tools, which are being translated from mice to higher-order mammals including primates. However, it remains unclear how light activates optogenetically transfected neurons. We have recently developed computational simulations of how light propagates through neural tissue and how it activates a detailed morphological model of a V1 pyramidal (excitatory) neuron. It is of great interest to understand such light stimulation effects also in other morphological neural types, particularly in inhibitory neurons. In this project, the student will first learn to use the NEURON simulator and our existing simulation framework. In the following, they will integrate new single neuron models into the simulation framework and use them to simulate and analyze their neural activation through optogenetic stimulation.</p>

</details>

<details class="janctx-project" id="project-4a96124c99980705ef5e">
<summary>Learning stimulation protocols for V1 surface optogenetic stimulation through syntehtic data driven AI.</summary>

<p>How can cortical stimulation produce activity resembling natural vision? Building on our simulations of optogenetic visual prostheses and earlier protocols for simple stimuli such as gratings, this project will develop stimulation strategies for more complex visual scenes. The student will use a detailed spiking model of primary visual cortex to generate synthetic pairs of surface LED stimulation patterns and cortical responses. A deep neural network will learn this relationship and support the inverse problem: finding stimulation patterns that approximate a desired visually evoked response. Candidate patterns will then be tested in the spiking simulation, comparing predicted and actual responses and measuring how well they generalize to unseen targets. The work will explicitly assess the limits imposed by light spread, available stimulation patterns and the network dynamics; it does not assume independent control of every neuron or demonstrate restored vision. Strong programming and analytical skills are useful; experience with Python, machine learning or computational neuroscience is an advantage.</p>

</details>

<details class="janctx-project" id="project-d9ffbb2fc912975549ab">
<summary>Simulation of phosphenes using our decoding model</summary>

<p>We have access to massive multi-electrode parallel recordings to tens of thousands visual stimuli from primary visual cortex (V1) of macaque.
We have developed techniques DNN techniques for decoding visual stimulus from the responses of neurons in V1.
In this project you will apply this model to decode responses from the massive multi-electrode recordings from macaque V1.
We will then simulate electrode stimulation in this decoding DNN model and study what perecpetion the model predicts to this artificial stimulation.</p>

</details>

<h4 class="janctx-project-category">Machine Learning in Neuroscience</h4>

<details class="janctx-project" id="project-144af71050eef1e4d5c3">
<summary>Determining maximally exciting and suppressive surround stimuli in a spiking model of primary visual cortex</summary>

<p>Recently a novel method of  studying coding properties of neurons in the visual system has been developed <a href="https://www.nature.com/articles/s41593-019-0517-x">ref</a>.
It is based on two steps. First a forward deep neural network model - a model that predicts responses on neurons to images - is trained on neural recordings. Next
by applying backpropagation to the model while keeping its weights fixed, a maximally exciting image is determined. Even more recdntly, this methods has been extended
to identify the maximally exciting and maximally inhibiting modulatory surround stimuli <a href="https://www.biorxiv.org/content/10.1101/2023.03.13.532473v1.full.pdf">ref</a>.
We have recently constructed a detailed large-scale <a href="https://www.biorxiv.org/content/biorxiv/early/2019/02/20/416156.full.pdf">model</a> of cat primary visual cortex (V1).
In this project student will apply this new method to synthetic responses of neurons from our large-scale model of V1 to (a) determine wether our model conforms
to the aforemntioned recent experimental findings and (b) to obtain a mechanistic understanding how the discovered surround modulation effects emerge in cortical network.</p>

</details>

<details class="janctx-project" id="project-069397d21abd2e92aec3">
<summary>Predict responses of neurons from the frontier open weight LLMs</summary>

<p>Can large AI models trained to understand images also predict how neurons in the visual cortex respond? This project will investigate whether visual representations in frontier open-weight multimodal language models can provide accurate neural predictions without training the underlying models on brain recordings.</p>
<p>The student will first review existing work and identify models that can run on the available computing resources. They will then extract model activations for images shown in neural-recording experiments, identify the model units most closely associated with each recorded neuron's responses, and fit simple linear readouts from those units. Unit selection and fitting will use training data, with predictive accuracy assessed on held-out images and compared with established vision models and, where feasible, models trained directly on neural data.</p>
<p>The goal is to establish how much of visual neural activity is already captured by general-purpose visual representations, and what additional value training on neural recordings provides.</p>

</details>

<h4 class="janctx-project-category">Disease</h4>

<details class="janctx-project" id="project-31df22431590f569b078">
<summary>Schizomorphic — visual sensory noise in schizophrenia</summary>

<p>Our clinical collaborators developed a new theory that postulates that schyzophrenia is driven by dopaminergicaly driven failure of developement of predictive signalling along the visual pathway. In this project you will take our detailed model of primary visual cortex (V1) to simulate the normal and diseased condition. In the diseased condition, the assumption is that the disruption of dompaminergic system cause changes of receptive field size in retina over time. Subsequently, you will use DNN techniques developed in our group to decode visual stimuli from the responses of the control and disease model. The prediction of the hypothesis is that the disruption of the dopaminergic system should to reduce ability to appropriately decode visual stimuli from the V1 neural response.</p>

</details>

<h4 class="janctx-project-category">Spiking Network Models of Visual System</h4>

<details class="janctx-project" id="project-5a2e966829fdbefed5ba">
<summary>Asymmetric On &amp; Off responses in Retina, LGN and V1</summary>

<p>ON and OFF pathways in the early visual system were long thought of as symmetric in their spatiotemporal properties. However, lately there has been a collection of studies in the retina (<a href="https://doi.org/10.1523/JNEUROSCI.22-07-02737.2002">Chichilnisky 2002</a>, <a href="https://www.pnas.org/doi/10.1073/pnas.1005846107">Ratliff 2010</a>, <a href="https://www.jneurosci.org/content/38/45/9728">Sneha 2018</a>) and in the visual cortex (<a href="https://www.sciencedirect.com/science/article/pii/S221112472100005X">Rahimi-Nasrabadi 2021</a>), which show significant differences between the two pathways, mirroring the statistical differences in natural scenes. The goal of the project will be to expand the current Retina/LGN/V1 model used by the CSNG lab to reflect these findings.</p>

</details>

<details class="janctx-project" id="project-484c8decbccf8035bb5d">
<summary>Columnar organization of spatial phase in V1 (Alonso)</summary>

<p>Recent <a href="https://www.nature.com/articles/nature17936">work</a> by Alonso Lab has shown that thalamic ON and OFF afferents converging onto neurons in primary visual cortex
have a very specific organization, which is OFF dominated, OFF centric and runs orthogonal to ocular dominance columns. Our current <a href="./research.html">large-scale integrative model </a>
of V1 does not feature this specific organization of thalamo-cortical afferents. The goal of this project will be to integrate this specific thalamo-cortical convergence
into the model, and then analyze the impact of this more specfific connectivity on the functional properties of the model.</p>

</details>

<details class="janctx-project" id="project-d81ec843dfe33463c0e8">
<summary>Cortico-thalamic loop port to current Mozaik</summary>

<p>This is an ideal introductory project to get acquainted with spiking neural networks, models of visual system, and our Mozaik simulation framework, and hence gateway to more advanced modelling projects. It is thus suitable as a volunteer project or bachelor thesis. The goal of the project is to take a model cortico-thalamic loop that was developed by a PhD student a while ago in a very old version of our simulator  environment <a href="https://www.biorxiv.org/content/10.1101/2022.12.19.521069v1">Mozaik</a> and port it into the current version of the simulator. The main challange of the project will be to get acquinted with the simulator stack, understand the code of the model, and then once the porting is done, which in itself should be straighforwad, to repeat the series of virtual experiments undertaken in the linked original study and verify that all results still hold in the ported model version.</p>

</details>

<details class="janctx-project" id="project-360f2d5113d7f05f9042">
<summary>Embedding of detailed compartmental neuron models into large-scale model of primary visual cortex</summary>

<p>One of the ongoing projects in our group is development of <a href="./research.html">large-scale integrative model </a> of cat primary visual cortex (V1).
This model is based on the <a href="http://www.scholarpedia.org/article/Adaptive_exponential_integrate-and-fire_model">Adaptive-Exponential Leaky Integrate and Fire</a>
neuron model, which reduces biological neurons to a point process, ignoring
its geometrical properties. In this project student will embed single compartmental model of V1 pyramidal neuron into the large scale point process
simulation available in the group, and investigate the behavior of the added detailed neuron under the influence of the input coming from the large scale
V1 simulation, focusing on properties influenced by the neuron's geometry.</p>

</details>

<details class="janctx-project" id="project-35c8c5ed14ccc04c0e5b">
<summary>Model of size dependent contrast invariance</summary>

<p>Unlike the classical results that say that V1 neurons have tuning width invariant to the contrast of the stimulus, our collaborators show that this contrast invariance falls apart when the stimuli are small.
You will use our large-scale spiking model of V1 to explain how this happens. We hypothesize that this is due to the insufficient lateral interactions that small stimuli recruit. You will simulate the same
experimental conditions as those used by our collaborators, demonstrate that our model exhibits the same behaviour, and ivestigate the mechanisms in the model that lead to this phenomenon through analysis and
inactivation experiments that disable parts of the model.</p>

</details>

<details class="janctx-project" id="project-bddf873fb77a95f8bec2">
<summary>Unifying V1 model branches</summary>

<p>We have recently constructed a detailed large-scale <a href="https://www.biorxiv.org/content/biorxiv/early/2019/02/20/416156.full.pdf">model</a> of cat primary visual cortex.
Since, we have expanded the model in different directions in several followup studies: <a href="http://www.theses.fr/2018USPCB083">addition of cortico-thalamic loop</a>, <a href="https://www.nature.com/articles/s41598-021-88960-8">simulation of proshetic vision</a> , and <a href="">exploration of conductance dynamics</a>.
The goal of this project is to unify the existing models into single model instance and demonstrate that it can reproduce all the findings shown in the inidividual previous studies.</p>

</details>

<h4 class="janctx-project-category">Models of neural system development</h4>

<details class="janctx-project" id="project-862815c78d08761f3f3c">
<summary>Biologically plausible model of body representation development (collaboration with the robotics group of Matej Hoffman, CVUT)</summary>

<p>This project is performed in tight collaboration with the robotics group of <a href="https://sites.google.com/site/matejhof/home">Matej Hoffman</a>.
The goal of this project is to explain how body representations can be learned in humanoid robots during
haptic self-exploration based on inputs provided by ‘artificial skin’ covering the robot’s body.
We hypothesize that <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3082289/pdf/fncom-05-00017.pdf">our model of cortical development proposed</a>
can aid this goal in following two ways:  (i) the model itself, when fed with the somatosensory data will form effective,
biologically plausible representation of body surface, (ii) the novelty signal that can be straightforwardly
obtained from the model can within the closed loop paradigm guide self-exploration behavior towards efficient
exploration of the body space. The novelty signal is readily available in the model, as novel inputs are poorly
represented by the evolving cortical representation and thus the input will have high distance from the most representative
(close within input space) cortical neuron. Thus a simple winner-take-all mechanism at the cortical level, that outputs
the distance between the input and the point in input space the winner neuron represents will yield effective novelty signal.
The student will test these hypotheses in collaboration with the <a href="https://sites.google.com/site/matejhof/home">Hoffman group</a> guided by following milestones. He/she will
implement and validate the model of somatosensory map formation from artificial skin inputs, implement the novelty signal extraction
mechanism, test its impact on map formation in closed-loop system, integrate the resulting model within the humanoid
robotic system at Hoffman group, and perform experiments to confirm effectiveness of the model and search for bio-morphic
correlates in the resulting behavior.</p>

</details>

<details class="janctx-project" id="project-daca2f0c4eff1a27ca43">
<summary>Reconciling activity driven development of orientation maps with ON-OFF V1 convergence</summary>

<p>During post-natal development, primary visual cortex undergoes remarkable functional organization resulting in expression
of topologically smooth orientation map across it's surface. The most common type of explenation for this phenomena is activity based development,
whereby internally generated or visually driven activity coupled with plasticity in the thalamo-cortical and corico-cortical pathway
induces gradual establishment of the orientation maps. <a href="http://ioam.github.io/topographica/Tutorials/GCAL_Tutorial.html">LISSOM</a> based familiy of models is an example of such activity + plasticity driven theoretical explanation of this phenomena.
Recent <a href="https://www.nature.com/articles/nature17936">work</a> by Alonso Lab has shown that thalamic ON and OFF afferents converging onto neurons in primary visual cortex
have a very specific organization, which is OFF dominated, OFF centric and runs orthogonal to ocular dominance columns. The current activity driven models of V1 development
cannot explain this specific organization of thalamo-cortical afferents. The goal of this project will be the expand these models to account for these new findings.</p>

</details>

<h4 class="janctx-project-category">Software engineering projects</h4>

<details class="janctx-project" id="project-aeaddc0e6c8eff66b747">
<summary>A 3D model visualization of detailed spiking neural network models</summary>

<p><a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations.
The <a href="/research.html">model of primary visual cortex</a> developed in our lab, and implemented in Mozaik, has a complex connectivity structure.
Although there are various tests that the connectivity has been realized as expected, currently, there is no easy way to
visualize the network spatial structure and connectivity in <a href="https://github.com/antolikjan/mozaik">Mozaik</a>. The aim of this project is to develop a
3D model visualization tool, for Mozaik, possibly building on existing tools such as <a href="http://moose.ncbs.res.in/moogli/">Moogli</a>, and <a href="http://software.incf.org/software/neuranim">NeurAnim</a>.</p>

</details>

<details class="janctx-project" id="project-a8703649677d76e50075">
<summary>Mozaik analysis parallelization</summary>

<p><a href="https://github.com/CSNG-MFF/mozaik">Mozaik</a> is an automated workflow for large-scale neural simulations. At the present moment, it is using MPI parallel execution for running simulations, but not in data analysis, which can thus take a long time. The project aims to parallelize the Mozaik analysis codebase to remedy this issue.</p>

</details>

<!-- janctx:student-projects:end -->
