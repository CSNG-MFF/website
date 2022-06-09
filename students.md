---
layout: default
title: Research
---

## Courses

- <a href="./programovani1.html"><span>NPRG030: Cvičení z Programování I</span></a>
- <a href="./programovani2.html"><span>NPRG031: Cvičení z Programování II</span></a>
- <a href="./ikv1.html"><span>NAIL087: Informatics and Cognitive Science I</span></a>
- <a href="./ikv2.html"><span>NAIL088: Informatics and Cognitive Science II</span></a>
- <a href="./compneuroseminar.html"><span>NAIL128: Computational neuroscience seminar</span></a>
<br>

## Available student projects

Would you like to contribute to our research? This is a list of projects available for interested students.
Most are designed to be completed within 3 to 6 month, but some can be expanded into longer projects, even
full PhD scope. If you are interested in working on any of the projects please contact [Ján Antolík](antolikjan@gmail.com).

If you want to get to know us, stop by at the Computational neuroscience seminar [NAIL128](./compneuroseminar.html) and have a chat with us.


#### Simulation of cortical implants for vision restoration

- <a href="javascript:void(0)" onclick="$('#project_electric_stim').toggle();">Modeling electrical stimulation in the visual cortex for visual prosthetic (brain-computer interface) applications</a>  
   <small id="project_electric_stim" class="studentprojectlist" style="display: none;">
   Intracortical microstimulation (ICMS) describes the local stimulation of neurons in the cortex with penetrating electrodes. The technique enabled several breakthroughs in interfacing with the brain, among them the control of a cursor through neural activity in the motor cortex of a human patient and the visual perception of shapes in non-human primates. Only recently, a computational study presented a model unifying experimental observations how ICMS directly activates neurons in the close surrounding of the electrode: ICMS activates a sparse set of neurons around the electrode with the number of activated neurons in the sphere around the electrode tip decreasing over distance to the electrode. Yet, the way the brain responds to the direct activation of a set of neurons around the electrode with network activity (e.g. neural firing rates) remains poorly understood. The goal of this project is to implement an abstract model of ICMS for the our group's large-scale model of cat primary visual cortex. Utilizing this model to simulate ICMS in cat primary visual cortex, the spatial extent of the network response to the stimulation shall be compared to the one reported in experimental recordings from monkey and human cortex.
   </small>

- <a href="javascript:void(0)" onclick="$('#project_optio_inh_stim').toggle();">Characterizing the spatiotemporal activation profile of different morphologies for optogenetic stimulation</a>  
   <small id="project_opto_inh_stim" class="studentprojectlist" style="display: none;">
   New approach to sensory prosthetics is being developed, wherby the the cortex is stimulated via opto-genetic tools, which are being translated from mice to higher-order mammals including primates. However, how does light activate opto-genetically transfected neurons remains unclear. We have recently developed computational simulations of how light propagates through neural tissue and how it activates a detailed morphological model of V1 piramidal (excitatory) neuron that expresses Channelrhodopsin channels. It is however of great interst to understand such light stimulation effects also in other morphological neural types, particularly in inhibitory neurons. In this project student will understand NEURON simulator and our existing simulation framework. He will port existing simulation of illumination with light source to a morphological model of a inhibitory neuron, run our existing analysis and visualization.
   </small>

#### Machine Learning in Neuroscience

- <a href="javascript:void(0)" onclick="$('#project_V1power').toggle();">Determining the computational power of detailed spiking models of biological vision.</a>  
   <small id="project_V1power" class="studentprojectlist" style="display: none;">
   Primary visual cortex is a complex recurrent dynamical system that operates quite differently from how modern neural network systems do. It however still remains 
   unclear how does a biological V1 compare in its computational power to the state-of-the-art DNN systems for image analysis. In this project you
   will take our <a href="./research.html">large-scale biologically dietailed spiking network model </a> of cat primary visual cortex (V1) and prepend
   it to an existing state-of-the-art DNN system as its first stage of processing. You will then train both the original DNN and the new hybrid system
   on an image categorization benchmark and analyze the difference between the performance of the two systems.
   </small>


- <a href="javascript:void(0)" onclick="$('#project_bioconstr').toggle();">Deep recurrent neural network V1 model with biologically constrained architecture.</a>  
   <small id="project_bioconstr" class="studentprojectlist" style="display: none;">
   A common approach for studying the function of early sensory systems is to determine the relationship between sensory inputs and associated (experimentally recorded) neural responses. In the past, mostly linear [[1](http://www.ncbi.nlm.nih.gov/pubmed/12938771)], or shallow non-linear techniques were utilized, leading to limited predictive and consequently explanatory power of models fitted in this way. More recently, the popular deep convolutional architectures were successfully tested on the neural data [[2](https://arxiv.org/abs/1711.02653),[3](https://doi.org/10.1101/201764)]. These general, machine-learning motivated models, however, ignore the known anatomical and functional architecture of visual system. In this project we will rectify this shortcoming by setting up a recurrent deep neural network whose architecture will be constrained such that it reflects know features of cortical anatomy, including the separation of cortical circuits into layers, exc vs. inh neural types, different physiological properties across neural types and layers, and different later extents of interactions for different neural types and layers. The model will be trained on dynamical activity of V1 neurons respond to naturalistic videos. The goal will be to compare the prediction performance of the novel RNN architecture against state-of-the-art in the field of neural predictions, as well as assess how well will the learned connectivity reflect the real biological connectivity.
   </small>

- <a href="javascript:void(0)" onclick="$('#project_decoding').toggle();">Novel DNN model for decoding visual stimuli from population recordings in primary visual cortex.</a>  
   <small id="project_decoding" class="studentprojectlist" style="display: none;">
   Recent years have witnessed a major breakthrough in DNN models ability to predict neural population activity of V1 neurons to novel visual stimuli.The inverse problem of predicting the natural image based on the activity it elicits in population of V1 neurons, however, remains much less studied, and consequently mastered. In this project the student will implement and test a novel DNN architecture designed to predict visual inputs from population activity of V1 neurons. The key aspect of the model is a pre-processing stage that converts population activity of V1 neurons into n-dimansional matrix to which standard CNN architectures can be applied. The idea of the pre-processing stage is following. We will first train a forward model (from images to V1 activities). This will allows us to determine the position, phase and orientation of receptive fields of individual neurons. We will rasterized each of these three dimension (position, phase, orientation), leading to a coordinate system representable as 4D matrix (position has 2 dimension itself). The value at each coordinate (x,y,z,u) in the 3D matrix will be calculated as a weighted sum of the activities of neurons in the population, where  the weights are the distance of the preference vector of the given cell (its postion, orientation and phase preference) from the coodinates (x,y,z,u).
   </small>

#### Spiking Network Models of Visual System

- <a href="javascript:void(0)" onclick="$('#project_macaque').toggle();">Model of monkey visual system.</a>  
   <small id="project_macaque" class="studentprojectlist" style="display: none;">
  We have recently constructed a detailed large-scale [model](https://www.biorxiv.org/content/biorxiv/early/2019/02/20/416156.full.pdf) of cat primary visual cortex.
  Along with cat, macaque is the most common animal model in which vision in higher mammals is studied. Recently, a comprehensive
  dataset on macaque physiology and function has been [published](https://academic.oup.com/cercor/article-abstract/30/6/3483/5691251?redirectedFrom=fulltext). The goal of this project would be to utilize this new data and
  reparametrize the existing model of cat V1 to obtain analogouse model of macaque V1. Exploration of the implication of species differences
  on V1 processing is a possible future extension of the project.
  </small>

- <a href="javascript:void(0)" onclick="$('#project_unified').toggle();">Unified model of cat visual system.</a>  
   <small id="project_unified" class="studentprojectlist" style="display: none;">
  We have recently constructed a detailed large-scale [model](https://www.biorxiv.org/content/biorxiv/early/2019/02/20/416156.full.pdf) of cat primary visual cortex.
  Since, we have expanded the model in different directions in several followup studies: [addition of cortico-thalamic loop](http://www.theses.fr/2018USPCB083), [simulation of proshetic vision](https://www.nature.com/articles/s41598-021-88960-8) , and [exploration of conductance dynamics]().
  The goal of this project is to unify the existing models into single model instance and demonstrate that it can reproduce all the findings shown in the inidividual previous studies.
  </small>

- <a href="javascript:void(0)" onclick="$('#project_mozaik_ON_OFF').toggle();">OFF centred thalamic V1 convergence.</a>  
   <small id="project_mozaik_ON_OFF" class="studentprojectlist" style="display: none;">
  Recent [work](https://www.nature.com/articles/nature17936) by Alonso Lab has shown that thalamic ON and OFF afferents converging onto neurons in primary visual cortex
  have a very specific organization, which is OFF dominated, OFF centric and runs orthogonal to ocular dominance columns. Our current <a href="./research.html">large-scale integrative model </a>
  of V1 does not feature this specific organization of thalamo-cortical afferents. The goal of this project will be to integrate this specific thalamo-cortical convergence
  into the model, and then analyze the impact of this more specfific connectivity on the functional properties of the model.
  </small>


- <a href="javascript:void(0)" onclick="$('#project2').toggle();">Embedding of detailed compartmental neuron models into large-scale model of primary visual cortex.</a>  
   <small id="project2" class="studentprojectlist" style="display: none;">
  One of the ongoing projects in our group is development of <a href="./research.html">large-scale integrative model </a> of cat primary visual cortex (V1).
  This model is based on the <a href="http://www.scholarpedia.org/article/Adaptive_exponential_integrate-and-fire_model">Adaptive-Exponential Leaky Integrate and Fire</a>
  neuron model, which reduces biological neurons to a point process, ignoring
  its geometrical properties. In this project student will embed single compartmental model of V1 pyramidal neuron into the large scale point process
  simulation available in the group, and investigate the behavior of the added detailed neuron under the influence of the input coming from the large scale
  V1 simulation, focusing on properties influenced by the neuron's geometry.
  </small>

- <a href="javascript:void(0)" onclick="$('#project10').toggle();">Stimulation protocols for vision restoration using brain-machine-interface.</a>  
   <small id="project10" class="studentprojectlist" style="display: none;">
  Recently we have applied the large-scale models developed in our team to the problem of cortical visual prosthesis. New approach to sensory prosthetics is being developed,
  wherby the the cortex is stimulated via opto-genetic tools, which are being translated from mice to higher-order mammals including primates. While all the technological components
  of the visual prosthesis are still under development, an important question remains open: how to stimulate the cortex to elicit percepts that are close to those due to the perception
  of the given stimulus under normal vision. This is where our large-scale modelling approach comes in. Using our V1 model simulations to test potenial stimulation strategies, we are
  making progress at answering this question. Currently, we have gained insights
  on how to eleicit simple canonical visual stimuli, specifically sinusoidal gratings. In the next step the student will be responsible for expanding the design and analysis to generic
  stimulation protocol capable of eliciting arbitrary visual stimuli. The current protocol can be straightforwardly expanded to this general case . The student't responsibility will be
  to implement this new stimulation protocol in our simulation framework, test the protocol in our model of V1, and implement and perform all the required analysis. Strong programming and
  analytical skills required. Knowledge of Python, computation neuroscience or neurobiology of visual system a plus.
  </small>

- <a href="javascript:void(0)" onclick="$('#project3').toggle();">Local-field potentials (LFP) in a large-scale model of cat primary visual cortex.</a>  
   <small id="project3" class="studentprojectlist" style="display: none;">
  One of the ongoing projects in our group is development of <a href="./research.html">large-scale integrative model </a> of cat primary visual cortex (V1).
  [LFP](https://en.wikipedia.org/wiki/Local_field_potential) is an electrophysiological signal generated by the summed electric current flowing from multiple
  nearby neurons within a small volume of nervous tissue. The goal of this project is to investigate the LFP signals that would be generated
  in our simulations of V1. The V1 model under investigation does not explicitly contain LFP signals, only the sub-threshold and spiking responses of
  individual neurons are available. Therefore one of previously proposed models
  of LFP signals such as [this one](https://github.com/INM-6/hybridLFPy) will be used to generate artifical LFP signals based on the outputs of the V1 simulation.
  This will be followed by thourough analysis of the resulting LFPs and results compared to previous findings, including recent data recorded at <a href="http://www.unic.cnrs-gif.fr/teams.html">UNIC</a> by the
  <a href="https://www.unic.cnrs-gif.fr/teams/Research%20group%20of%20Yves%20Fr%C3%A9gnac">Yves Frégnac group</a>.
  </small>

#### Models of neural system development

- <a href="javascript:void(0)" onclick="$('#project_body').toggle();">Biologically plausible model of body representation development (in collaboration with the robotics group of Matej Hoffman, CVUT).</a>  
   <small id="project_body" class="studentprojectlist" style="display: none;">
  This project is performed in tight collaboration with the robotics group of [Matej Hoffman](https://sites.google.com/site/matejhof/home).
  The goal of this project is to explain how body representations can be learned in humanoid robots during
  haptic self-exploration based on inputs provided by ‘artificial skin’ covering the robot’s body.
  We hypothesize that [our model of cortical development proposed](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3082289/pdf/fncom-05-00017.pdf)
  can aid this goal in following two ways:  (i) the model itself, when fed with the somatosensory data will form effective,
  biologically plausible representation of body surface, (ii) the novelty signal that can be straightforwardly
  obtained from the model can within the closed loop paradigm guide self-exploration behavior towards efficient
  exploration of the body space. The novelty signal is readily available in the model, as novel inputs are poorly
  represented by the evolving cortical representation and thus the input will have high distance from the most representative
  (close within input space) cortical neuron. Thus a simple winner-take-all mechanism at the cortical level, that outputs
  the distance between the input and the point in input space the winner neuron represents will yield effective novelty signal.
  The student will test these hypotheses in collaboration with the [Hoffman group](https://sites.google.com/site/matejhof/home) guided by following milestones. He/she will
  implement and validate the model of somatosensory map formation from artificial skin inputs, implement the novelty signal extraction
  mechanism, test its impact on map formation in closed-loop system, integrate the resulting model within the humanoid
  robotic system at Hoffman group, and perform experiments to confirm effectiveness of the model and search for bio-morphic
  correlates in the resulting behavior.
  </small>

- <a href="javascript:void(0)" onclick="$('#project_kaschube').toggle();">Development of long-range correlations in spontaneous activity.</a>  
   <small id="project_kaschube" class="studentprojectlist" style="display: none;">
  In a recent paper, [Smith et al.](Distributed network interactions and their emergence in developing neocortex) demonstrate that spontaneous activity 
  in early post-natal V1 in ferrets, before eye opening, is already highly structured with spontaneous spatial correlations that are linked to the
  orientation maps that develop few days later. Furthermore, it was shown, that no afferent input from thalamus (or retina) is needed for these
  structure in spontaneous activity to appear. The authors hypothesize, that local maxican-hat-like connectivity that is anysothropic is 
  sufficent for such correlation patterns to appear. In this project we will verify the hypothesis that the anaysothropy of local connections, which
  is questionable, is not neccesary if hebbian learning on the cortico-corticl synapses is assumed, and furthermore, such mechanisms can explain
  further development and refinenement of orientation maps. The goal of this project is to build a firing-rate model with hebbian-learning that 
  will demonstrate test this hypothesis.
  </small>

- <a href="javascript:void(0)" onclick="$('#project_dev_ON_OFF').toggle();">Reconciling activity driven development of orientation maps with ON/OFF V1 convergence.</a>  
   <small id="project_dev_ON_OFF" class="studentprojectlist" style="display: none;">
  During post-natal development, primary visual cortex undergoes remarkable functional organization resulting in expression
  of topologically smooth orientation map across it's surface. The most common type of explenation for this phenomena is activity based development,
  whereby internally generated or visually driven activity coupled with plasticity in the thalamo-cortical and corico-cortical pathway
  induces gradual establishment of the orientation maps. [LISSOM](http://ioam.github.io/topographica/Tutorials/GCAL_Tutorial.html) based familiy of models is an example of such activity + plasticity driven theoretical explanation of this phenomena.
  Recent [work](https://www.nature.com/articles/nature17936) by Alonso Lab has shown that thalamic ON and OFF afferents converging onto neurons in primary visual cortex
  have a very specific organization, which is OFF dominated, OFF centric and runs orthogonal to ocular dominance columns. The current activity driven models of V1 development
  cannot explain this specific organization of thalamo-cortical afferents. The goal of this project will be the expand these models to account for these new findings.
  </small>

- <a href="javascript:void(0)" onclick="$('#project1').toggle();">Unifying retinal mozaik model with activity based development.</a>  
   <small id="project1" class="studentprojectlist" style="display: none;">
  During post-natal development, primary visual cortex undergoes remarkable functional organization resulting - among others - in expression
  of topologically smooth orientation map across it's surface. The most common type of explenation for this phenomena is activity based development,
  whereby internally generated or visually driven activity coupled with plasticity in the thalamo-cortical and corico-cortical pathway
  induces gradual establishment of the orientation maps. [LISSOM](http://ioam.github.io/topographica/Tutorials/GCAL_Tutorial.html) based familiy of models is an example of such activity + plasticity driven models.
  An alternative explanation has been proposed by [Ringach](http://jn.physiology.org/content/92/1/468) (see also [this](http://www.nature.com/neuro/journal/v14/n7/full/nn.2824.html)) , in which the initial orientation maps are directly established by
  the very specific geometric properties of retinal ganglion cells RFs positions in visual space: [retinal mozaiks](http://labs.nri.ucsb.edu/reese/benjamin/PubsRetinalMosaics.html). However, this explanation
  can account only for initial very weak orientation maps, and low orienation selectivities of individual neurons in particular, and it is clear that
  the system has to undergo major further refinement in order to match the experimentally observed adult state. The goal of this project is to combine
  the two hypothesis of orientation map development and investigate their possible interactions.
  Specifically retinal mozaiks will be introduced into a LISSOM model, thus inducing the initial orientation maps based on Ringach et al. theory.
  This will be followed by simulation of the activity and plasticity driven development, which should lead to refinement of the intial maps.
  The correspondance between the initial retinal mozaik induced map with the final developed map will be assesed, and possible advantages of such
  dual orientation map development mechanism will be investigated.
  </small>

#### Software engineering projects

- <a href="javascript:void(0)" onclick="$('#project5').toggle();">Data-store module based on object oriented database for biological neural network simulator.</a>  
   <small id="project5" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations,
  with a highly modular architecture. One of the core Mozaik modules is a data-store, in which recordings from simulations richly
  annotated with metadata regarding experimental context are stored. Currently the data-store module is implemented as a
  database-like system based on [Neo](http://neuralensemble.org/neo/) library for internal representation of recorded data.
  The goal of this project is to develop an alternative data-store module based around dedicated key-value database such as
  [BerkelyDB](http://www.oracle.com/technetwork/database/database-technologies/berkeleydb/overview/index.html) or [CodernityDB](http://labs.codernity.com/codernitydb/).
  </small>

- <a href="javascript:void(0)" onclick="$('#project6').toggle();">A model inspection/visualization tool for biological neural network simulator.</a>  
   <small id="project6"  class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations.
  The [model of primary visual cortex](/research.html) developed in our lab, and implemented in Mozaik, has a complex connectivity structure.
  Although there are various tests that the connectivity has been realized as expected, currently, there is no easy way to
  visualize the network spatial structure and connectivity in [Mozaik](https://github.com/antolikjan/mozaik). The aim of this project is to develop a
  model inspection and visualization tool, for Mozaik, possibly building on existing tools such as [ConnPlotter](http://arken.umb.no/~plesser/software.html), [Moogli](http://moose.ncbs.res.in/moogli/), and [NeurAnim](http://software.incf.org/software/neuranim).
  </small>

- <a href="javascript:void(0)" onclick="$('#project8').toggle();">Sumatra integration with Mozaik.</a>  
   <small id="project8" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations.
  <a href="http://neuralensemble.org/sumatra/">Sumatra</a> is a tool for provenance tracking. Sumatra shares several features with Mozaik, but it also
  posses features that would enhance the Mozaik workflow. The goal of this project is to integrate Sumatra with Mozaik, and
  remove overlapping features from Mozaik and delegating them to Sumatra, in line with long term goal of outsourcing
  as much functionality from Mozaik to dedicated tools. This project is suitable for students with interest in Neuroinformatics
  and moderate skills in Python and versioning systems.
  </small>

#### Web development projects

- <a href="javascript:void(0)" onclick="$('#project12').toggle();">Open Vision project.</a>  
   <small id="project12" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations. Inspired by the [OpenWorm](http://www.openworm.org)
  initiative, this project strives to bring neural based modelling of vision to the public. It will seek to engage the cognitive sciences enthusiast community into
  coordinate effort to build a comprehensive model of early and higher vision. We envision multiple phases of the project: <br>
  (1) Build a server running mozaik based V1 model and serve it on the new Open Vision website. The website will allow any member of public to submit a video and receive back the responses of selected model cells.<br>
  (2) Develop a web frontend to the Mozaik toolkit and use it to expand the Open Vision website to allow full configuration of the served model. Publish more models and experimental protocols already develop in our group. <br>
  (3) Expand upon 1 and 2 to build full open science platform similar to OpenWorm project, and build striving community around it.
  </small>

- <a href="javascript:void(0)" onclick="$('#project4').toggle();">Graphical user interface for biological neural network simulator.</a>  
   <small id="project4" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations.
  Mozaik automatically records data from simulations, annotates it with metadata regarding experimental context, and stores
  them in an internal data-store. An query based interface allows analysis and visualization modules to efficiently navigate
  through the stored data based on the attached metadata. Currently, Mozaik offers only programatic API to perform these interactions
  with data-store. The goal of this project would be to write a HTML based graphical user interface frontend, to the Mozaik data-store, that will
  allow users to conveniently and interactively navigate and select data from the data-store and subsequently execute on them anaysis and
  visualization routines from Mozaik libraries.  
   </small>

- <a href="javascript:void(0)" onclick="$('#project7').toggle();">Deployment of a biological neural network simulator on a HPC platrform.</a>  
   <small id="project7" class="studentprojectlist" style="display: none;">
  [Mozaik](https://github.com/antolikjan/mozaik) is a an automated workflow for large-scale neural simulations.
  Mozaik depends on a moderate software stack including [PyNN](http://neuralensemble.org/PyNN/) as a simulator independent
  model specification language, and [Nest](http://www.nest-initiative.org/) as the simulator of choice in our projects.
  Currently we deploy Mozaik (together with the software stack) on a local cluster, however already at this relatively
  small scale we are aware of number of inefficiencies in terms of its performance in the parallel environment. Furthermore, in future we would like
  to deploy Mozaik on a large-scale High Performance Computing (HPC) platform such as [ADA](http://www.idris.fr/ada/). The goal of this project is to test and optimize Mozaik and it's underlying
  software stack to run efficiently on the local cluster, and subsequently scale it up to a large-scale HPC platform.
  This project is suitable for students with experience and interest in parallel programming and HPC.
  </small>
