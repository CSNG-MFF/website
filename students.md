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


- <a href="javascript:void(0)" onclick="$('#project_electric_stim_paolo').toggle();">Using DNNs to predicting perception from electrode stimulation data in macaque primary visual cortex.</a>  
   <small id="project_electric_stim_paolo" class="studentprojectlist" style="display: none;">
   We have access to massive multi-electrode parallel recordings to tens of thousands visual stimuli from primary visual cortex (V1) of macaque.
   We have developed techniques DNN techniques for decoding visual stimulus from the responses of neurons in V1.
   In this project you will apply this model to decode responses from the massive multi-electrode recordings from macaque V1.
   We will then simulate electrode stimulation in this decoding DNN model and study what perecpetion the model predicts to this artificial stimulation.
   </small>

- <a href="javascript:void(0)" onclick="$('#project_electric_stim').toggle();">Modeling electrical stimulation in the visual cortex for visual prosthetic (brain-computer interface) applications</a>  
   <small id="project_electric_stim" class="studentprojectlist" style="display: none;">
   Intracortical microstimulation (ICMS) describes the local stimulation of neurons in the cortex with penetrating electrodes. The technique enabled several breakthroughs in interfacing with the brain, among them the control of a cursor through neural activity in the motor cortex of a human patient and the visual perception of shapes in non-human primates. Only recently, a computational study presented a model unifying experimental observations how ICMS directly activates neurons in the close surrounding of the electrode: ICMS activates a sparse set of neurons around the electrode with the number of activated neurons in the sphere around the electrode tip decreasing over distance to the electrode. Yet, the way the brain responds to the direct activation of a set of neurons around the electrode with network activity (e.g. neural firing rates) remains poorly understood. The goal of this project is to implement an abstract model of ICMS for the our group's large-scale model of cat primary visual cortex. Utilizing this model to simulate ICMS in cat primary visual cortex, the spatial extent of the network response to the stimulation shall be compared to the one reported in experimental recordings from monkey and human cortex.
   </small>

- <a href="javascript:void(0)" onclick="$('#project_opto_inh_stim').toggle();">Characterizing the spatiotemporal activation profile of different neuron types for optogenetic stimulation</a>  
   <small id="project_opto_inh_stim" class="studentprojectlist" style="display: none;">
  New approaches to sensory prosthetics are being developed, wherby the cortex is stimulated via opto-genetic tools, which are being translated from mice to higher-order mammals including primates. However, it remains unclear how light activates optogenetically transfected neurons. We have recently developed computational simulations of how light propagates through neural tissue and how it activates a detailed morphological model of a V1 pyramidal (excitatory) neuron. It is of great interest to understand such light stimulation effects also in other morphological neural types, particularly in inhibitory neurons. In this project, the student will first learn to use the NEURON simulator and our existing simulation framework. In the following, they will integrate new single neuron models into the simulation framework and use them to simulate and analyze their neural activation through optogenetic stimulation.</small>

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
  analytical skills required. Knowledge of Python, computation neuroscience or neurobiology of visual system a plus.</small>


#### Machine Learning in Neuroscience


- <a href="javascript:void(0)" onclick="$('#project_transfer').toggle();">Transfer learning: from spiking models to DNNs.</a>  
   <small id="project_transfer" class="studentprojectlist" style="display: none;">
   We have recently showed that under the right circumstances, transfer learning, whereby we train a DNN model on a large synthetic dataset of image-response pairs generated by our large-scale
   biologically detailed [model](https://www.biorxiv.org/content/biorxiv/early/2019/02/20/416156.full.pdf)  of V1, and than fine tuning the DNN model on smaller dataset of experimental recordings
   from V1 neurons, greatly improves the prediction power of the resulting DNN model on biological data. In this project you will take a state-of-the-art DNN model for predicting response of V1
   neurons, pretrain it on our synthethic spiking model data, and then fine-tune it on recordings of macaque V1 neurons. You will analyse how the performance improves, or not, via the transfer 
   learning, and characterise what ratio of synthetic and real data is optimal.
   </small>

- <a href="javascript:void(0)" onclick="$('#project_bioconstr').toggle();">Capturing spatio-temporal dynamics in primary visual cortex using  deep neural network model using synthetic and macaque data.</a>  
   <small id="project_bioconstr" class="studentprojectlist" style="display: none;">
   Application of deep neural networks to large datasets of neural data recorded in response to library of visual stimuly become the dominant method of unraveling the function of neurons in visual cortex. 
   The standard approaches however (i) ignore known anatomical  structure of visual cortex, (ii) use purely feed-forward NN as opposed to the intrinsically recurrent biological networks, 
   (iii) only capture the mean steady state response. To address this, in this project you will build a DNN model composed of multiple recurrent neural network stages, that will be constrained 
   to follow various know anatomical structures, and train the resulting model on fine temporal  recordings of V1 responses to natural images.
   You will use combination of massive parallel multielectrode array recordings from macaque V1 to tens of thousands of images, and even more large-scale synthetic  data from our spiking V1 modle to develop the new DNN models.
   {% comment %}    This project can be further extended to explore the possibility of pretraining the resulting model with contrastive unsupervised learning method recently used by [DiCarlo lab for training DNNs for modeling ventral visual pathway](https://www.biorxiv.org/content/10.1101/2023.05.18.541361v1). {% endcomment %}</small>

- <a href="javascript:void(0)" onclick="$('#project_decoding').toggle();">Novel DNN model for decoding visual stimuli from population recordings in primary visual cortex of macaque data.</a>  
   <small id="project_decoding" class="studentprojectlist" style="display: none;">
   Recent years have witnessed a major breakthrough in DNN models ability to predict neural population activity of V1 neurons to novel visual stimuli. 
   The inverse problem of predicting the natural image based on the activity it elicits in population of V1 neurons, however, remains much less studied, and consequently mastered. 
   In this project you will implement and test a novel DNN architecture designed to predict visual inputs from population activity of V1 neurons. 
   {% comment %}  The key aspect of the model is a pre-processing stage that converts population activity of V1 neurons into n-dimansional matrix to which standard CNN architectures can be applied. The idea of the pre-processing stage is following. We will first train a forward model (from images to V1 activities). This will allows us to determine the position, phase and orientation of receptive fields of individual neurons. We will rasterized each of these three dimension (position, phase, orientation), leading to a coordinate system representable as 4D matrix (position has 2 dimension itself). The value at each coordinate (x,y,z,u) in the 3D matrix will be calculated as a weighted sum of the activities of neurons in the population, where  the weights are the distance of the preference vector of the given cell (its postion, orientation and phase preference) from the coodinates (x,y,z,u). {% endcomment %}</small>

- <a href="javascript:void(0)" onclick="$('#project_surr_mei').toggle();">Determining maximally exciting and suppressive surround stimuli in a spiking model of primary visual cortex.</a>  
   <small id="project_surr_mei" class="studentprojectlist" style="display: none;">
   Recently a novel method of  studying coding properties of neurons in the visual system has been developed [ref](https://www.nature.com/articles/s41593-019-0517-x).
   It is based on two steps. First a forward deep neural network model - a model that predicts responses on neurons to images - is trained on neural recordings. Next
   by applying backpropagation to the model while keeping its weights fixed, a maximally exciting image is determined. Even more recdntly, this methods has been extended
   to identify the maximally exciting and maximally inhibiting modulatory surround stimuli [ref](https://www.biorxiv.org/content/10.1101/2023.03.13.532473v1.full.pdf).
   We have recently constructed a detailed large-scale [model](https://www.biorxiv.org/content/biorxiv/early/2019/02/20/416156.full.pdf) of cat primary visual cortex (V1).
   In this project student will apply this new method to synthetic responses of neurons from our large-scale model of V1 to (a) determine wether our model conforms 
   to the aforemntioned recent experimental findings and (b) to obtain a mechanistic understanding how the discovered surround modulation effects emerge in cortical network.
   </small>

- <a href="javascript:void(0)" onclick="$('#project_mlforormap').toggle();">Machine learning from macaque and synthetic data to predict orientation preference maps.</a>  
   <small id="project_mlforormap" class="studentprojectlist" style="display: none;">
   Being able to decode functional representations, specifically orientation maps, from spontaneous activity recorded in primary visual cortex (V1) is an essential prerequisite for developing effective stimulation protocols for visual prosthetic devices. In this project you will combine macaque V1 data with synthetic data from our V1 model to develop a ANN based approach for decoding these maps. You'll first create a dataset by combining events obtained from multiple Utah arrays and augment it by shuffling electrode position. This step will be crucial to make the method work for a novel array/orientation maps. Each event will be labelled according to the orientation map that it resembles the most. Then you'll use a ANN to find  metric that returns distance between the labels of events. This ANN takes as input the every event from a given array and return the pairwise distance between events.
   Then you'll develop a contrastive learning and ANN based mapping to a lower dimensional space where events are data points, and positive and negative samples decided according to the developed metrics (inspired by CEBRA). From this low dimensional space it should be possible to decode orientation of events and of electrodes (up to a global orientation shift per Utah array).
   </small

#### Disease

- <a href="javascript:void(0)" onclick="$('#project_schyzophrenia').toggle();">Modelling dopaminergicaly and visualy driven theory of schyzophrenia development.</a>  
   <small id="project_schyzophrenia" class="studentprojectlist" style="display: none;">
   Our clinical collaborators developed a new theory that postulates that schyzophrenia is driven by dopaminergicaly driven failure of developement of predictive signalling along the visual pathway.
   In this project you will take our detailed model of primary visual cortex (V1) to simulate the normal and diseased condition. In the diseased condition, the assumption is that the disruption of dompaminergic system
   cause changes of receptive field size in retina over time. Subsequently, you will use DNN techniques developed in our group to decode visual stimuli from the responses of the control and disease model. The prediction of the hypothesis is that the disruption of the dopaminergic system should 
   to reduce ability to appropriately decode visual stimuli from the V1 neural response.</small>



#### Spiking Network Models of Visual System

- <a href="javascript:void(0)" onclick="$('#modelsom').toggle();">Modeling different inhibitory neural types in large-scale spiking model of V1.</a>  
   <small id="modelsom" class="studentprojectlist" style="display: none;">
   The major inhibitory neuron sub-types (SOM,VIP and PV) were identified in mouse cortex. A major smaller evidence shows that such divsion exists also in cortex of higher mammals.
   Due to the lack of data our current large-scale model of cat V1 only considers a singe 'abstract' model of inhibitory neurons that simulates the average impact of these three sub-types.
   In this project you will take the know facts about the inhibitory neural sub-types in mouse and use them to simulate the potential impact of such subdivision on higher-mammalian cortex, using our V1 model. 
   </small>

- <a href="javascript:void(0)" onclick="$('#modelport').toggle();">Porting model of cortico-thalamic loop to latest version of Mozaik</a>  
   <small id="modelport" class="studentprojectlist" style="display: none;">
   This is an ideal introductory project to get acquainted with spiking neural networks, models of visual system, and our Mozaik simulation framework, and hence gateway to more advanced modelling projects. It is thus suitable as a volunteer project or bachelor thesis. The goal of the project is to take a model cortico-thalamic loop that was developed by a PhD student a while ago in a very old version of our simulator  environment [Mozaik](https://www.biorxiv.org/content/10.1101/2022.12.19.521069v1) and port it into the current version of the simulator. The main challange of the project will be to get acquinted with the simulator stack, understand the code of the model, and then once the porting is done, which in itself should be straighforwad, to repeat the series of virtual experiments undertaken in the linked original study and verify that all results still hold in the ported model version. 
   </small>

- <a href="javascript:void(0)" onclick="$('#asymmetric').toggle();">Asymmetric On & Off responses in Retina, LGN and V1.</a>  
   <small id="asymmetric" class="studentprojectlist" style="display: none;">
   ON and OFF pathways in the early visual system were long thought of as symmetric in their spatiotemporal properties. However, lately there has been a collection of studies in the retina ([Chichilnisky 2002](https://doi.org/10.1523/JNEUROSCI.22-07-02737.2002), [Ratliff 2010](https://www.pnas.org/doi/10.1073/pnas.1005846107), [Sneha 2018](https://www.jneurosci.org/content/38/45/9728)) and in the visual cortex ([Rahimi-Nasrabadi 2021](https://www.sciencedirect.com/science/article/pii/S221112472100005X)), which show significant differences between the two pathways, mirroring the statistical differences in natural scenes. The goal of the project will be to expand the current Retina/LGN/V1 model used by the CSNG lab to reflect these findings.
  </small>

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

- <a href="javascript:void(0)" onclick="$('#project_tw').toggle();">Travelling waves.</a>  
   <small id="project_tw" class="studentprojectlist" style="display: none;">
  During spontaneous activity, mammalina cortex exhibits regular spontaneous emergence of waves of activity that travel across the cortical surface.
  Furthermore, spatially, these waves tend to be correlated with the functional organization across cortical surface. Such highly structured spontaneous
  activity, present even in low-level sensory cortical areas, has been hypothesized to be linked to such phenomena, as imagination, dreams, formation
  of long-term memory and other high-level cognitive phenomena. In this project student will explore the presence of such spontaneos waves in our comprehensive model
  of cat primary visual cortex. He/she will expand the <a href="https://github.com/antolikjan/mozaik">Mozaik</a> framework with the ability to record Local Field Potential
  type of signal. Perform experiments in which the waves will be recorded and will compare such in-silico generated data to in-vivo data from our international collaborators.
  </small>


#### Methods for analyzing experimental and simulated neural data

- <a href="javascript:void(0)" onclick="$('#project_s1').toggle();">Impact of traveling waves on decoding of functional cortical organisation from spontaneous activity.</a>  
   <small id="project_s1" class="studentprojectlist" style="display: none;">
   We have recently developed a method for decoding functional organisation, specifically orientation maps, from spontaneous population activity in primary visual cortex.
   Apart from teaching us about the nature of spontaneous activity in cortex, this is a crucial step for developing future visual neuro-prosthetic devices for vision restoration.
   In this method we used a PCA method to identify a low-dimensional subspace of the spontaneous population activity in which the orientation maps reside. Interestingly, these 
   were not the first 2 PCA components but components 3-5. But what do the first two components correspond to? Our hypothesis is that they correspond to large-scale, perhaps
   whole brain, spontaneous waves, that are know to be present. In this project you will test this hypothesis by analysing a unique state-of-the-art data from 10 Utah electrode
   arrays implanted accross V1,V2 and V4 of 2 macaque monkeys.
  </small>

- <a href="javascript:void(0)" onclick="$('#project5').toggle();">Relationship of traveling waves and oscillations in the cat primary visual cortex.</a>  
   <small id="project5" class="studentprojectlist" style="display: none;">
   Both traveling waves and oscillations have been observed in the primary visual cortex, but their relationship is unclear. The aim of the project is to   first detect traveling waves in electro-corticographic recordings from the primary visual cortex of a cat and subsequently to analyze the spectral properties of the signal during the ocurrence of traveling waves. The question whether traveling waves lead to an increase of power in the gamma frequency band is of particular interest.
  </small>

- <a href="javascript:void(0)" onclick="$('#project6').toggle();">Topological analysis of population activity in a large-scale V1 model.</a>  
   <small id="project6"  class="studentprojectlist" style="display: none;">
   Topological methods offer a promissing new direction in the analysis of neural data [[Saggar 2018](https://www.nature.com/articles/s41467-018-03664-4)]. It was previously reported that population activity in the primary visual cortex (V1) of macaque monkeys occupies a sphere [[Singh 2008](https://jov.arvojournals.org/article.aspx?articleid=2193262)]. The aim of this thesis is to replicate the study by Singh et al 2010 for population activity generated synthetically by a large-scale model of a cat V1 [[Antolík 2019](https://www.biorxiv.org/content/10.1101/416156v4)] and investigate robustness of the topological structure of the activity to parameter changes.
  </small>

- <a href="javascript:void(0)" onclick="$('#project8').toggle();">Fractal dimension of population activity in a large-scale V1 model.</a>  
   <small id="project8" class="studentprojectlist" style="display: none;">
   The activity elicited in the primary visual cortex (V1) by a visual stimulus may directly reflect its spatial properties such as the frequency of spatially periodic structure. The aim of this thesis is to measure the fractal dimension of activity patterns elicited in a large-scale V1 model [[Antolík 2019](https://www.biorxiv.org/content/10.1101/416156v4)] as a function of the stimulus. It would be particularly interesting to compare the topological properties of activity triggered by natural vs artificial stimuli such as drifting gratings typically used in experiments.
  </small>

#### Models of neural system development

- <a href="javascript:void(0)" onclick="$('#project_body').toggle();">Biologically plausible model of body representation development (collaboration with the robotics group of Matej Hoffman, CVUT).</a>  
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

- <a href="javascript:void(0)" onclick="$('#mozaikdocker').toggle();">Mozaik dockerization.</a>  
   <small id="mozaikdocker" class="studentprojectlist" style="display: none;">
   [Mozaik](https://github.com/CSNG-MFF/mozaik) is an automated workflow for large-scale neural simulations. At the present moment, it relies on a range of packages, with a multi-step installation process. Being the basis of the majority of CSNG lab projects and publications, we would like to make the installation process easier, for easier replicability and adoption outside the CSNG lab. The project aims to dockerize Mozaik to simplify the installation process. 
  </small>

- <a href="javascript:void(0)" onclick="$('#mozaikparall').toggle();">Mozaik analysis parallelization.</a>  
   <small id="mozaikparall" class="studentprojectlist" style="display: none;">
   [Mozaik](https://github.com/CSNG-MFF/mozaik) is an automated workflow for large-scale neural simulations. At the present moment, it is using MPI parallel execution for running simulations, but not in data analysis, which can thus take a long time. The project aims to parallelize the Mozaik analysis codebase to remedy this issue.
  </small>

- <a href="javascript:void(0)" onclick="$('#project_software1').toggle();">Data-store module based on object oriented database for biological neural network simulator.</a>  
   <small id="project_software1" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations,
  with a highly modular architecture. One of the core Mozaik modules is a data-store, in which recordings from simulations richly
  annotated with metadata regarding experimental context are stored. Currently the data-store module is implemented as a
  database-like system based on [Neo](http://neuralensemble.org/neo/) library for internal representation of recorded data.
  The goal of this project is to develop an alternative data-store module based around dedicated key-value database such as
  [BerkelyDB](http://www.oracle.com/technetwork/database/database-technologies/berkeleydb/overview/index.html) or [CodernityDB](http://labs.codernity.com/codernitydb/).
  </small>

- <a href="javascript:void(0)" onclick="$('#project_software2').toggle();">A 3D model visualization of detailed spiking neural network models.</a>  
   <small id="project_software2"  class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations.
  The [model of primary visual cortex](/research.html) developed in our lab, and implemented in Mozaik, has a complex connectivity structure.
  Although there are various tests that the connectivity has been realized as expected, currently, there is no easy way to
  visualize the network spatial structure and connectivity in [Mozaik](https://github.com/antolikjan/mozaik). The aim of this project is to develop a
  3D model visualization tool, for Mozaik, possibly building on existing tools such as [Moogli](http://moose.ncbs.res.in/moogli/), and [NeurAnim](http://software.incf.org/software/neuranim).
  </small>

- <a href="javascript:void(0)" onclick="$('#project_software3').toggle();">Sumatra integration with Mozaik.</a>  
   <small id="project_software3" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations.
  <a href="http://neuralensemble.org/sumatra/">Sumatra</a> is a tool for provenance tracking. Sumatra shares several features with Mozaik, but it also
  posses features that would enhance the Mozaik workflow. The goal of this project is to integrate Sumatra with Mozaik, and
  remove overlapping features from Mozaik and delegating them to Sumatra, in line with long term goal of outsourcing
  as much functionality from Mozaik to dedicated tools. This project is suitable for students with interest in Neuroinformatics
  and moderate skills in Python and versioning systems.
  </small>

- <a href="javascript:void(0)" onclick="$('#project_software4').toggle();">Parameter searches in Mozaik</a>  
   <small id="project_software4" class="studentprojectlist" style="display: none;">
  <a href="https://github.com/antolikjan/mozaik">Mozaik</a> is a an automated workflow for large-scale neural simulations. A common need in computational modeling is the need to
perform a parameter search of model paramaters to assess how it behaves under different parametrisations. The Mozaik framework currently possess a module for automating 
such parameter searches, but with number of important limitations. The goal of this project will be to improve the implementation of this module to surprass these limitations.
  </small>


#### Web development projects

- <a href="javascript:void(0)" onclick="$('#projectArkeia').toggle();">Arkheia update & expansion.</a>  
   <small id="projectArkeia" class="studentprojectlist" style="display: none;">
   Arkheia is an Angular-based data visualization tool used by much of the CSNG team to interpret simulation results, with a tech stack that needs updating. The project would consist of updating/rewriting Arkheia such that it would use an up-to-date tech stack, and potential expansion of Arkheia functionality.
  </small>

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
