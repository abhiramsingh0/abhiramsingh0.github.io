document.addEventListener('DOMContentLoaded', () => {  
    let containerDiv = createDivByClass("container-fluid");
    document.body.appendChild(containerDiv);
    containerDiv.appendChild(createHeading("H1", "Abhiram Singh"));
    containerDiv.appendChild(createNavTabs());
    containerDiv.appendChild(createDivByClass("tab-content"));
    createTabContent("Home")
  });

function createDivByClass(className){
    let div = document.createElement("div");
    div.classList.add(className);
    return div
}

function createHeading(headType, heading){
    let x = document.createElement(headType);
    x.innerHTML = heading;
    return x
}

function createNavTabs(){
    ul = document.createElement("ol");
    ul.classList.add("nav", "nav-tabs", "nav-fill");
    tabName = ["Home", "CV", "Contact"];
    itemsList = createNavTabItem(tabName);
    for (id=0; id<itemsList.length; id++){
        ul.appendChild(itemsList[id]);
    }
    return ul
}

function createNavTabItem(href_ids_list){
    let li_arr = []
    for (id=0; id<href_ids_list.length; id++){
        let listItem = document.createElement('li');
        if (href_ids_list[id] === "Home"){
            listItem.classList.add("active");
        }
        ref = document.createElement('a');
        ref.href = "#"+href_ids_list[id];
        // ref["data-toggle"] = "tab";
        ref.innerHTML = href_ids_list[id]
        
        listItem.addEventListener("click", clickUpdate);
        listItem.appendChild(ref)
        li_arr.push(listItem)
    }
    return li_arr
}

function clickUpdate(){
    ul_items = this.parentNode.childNodes
    for (id=0; id<ul_items.length; id++){
        if (this.childNodes[0].innerHTML === ul_items[id].childNodes[0].innerHTML){
            this.classList.add("active")
            createTabContent(this.childNodes[0].innerHTML)
        }
        else{
            ul_items[id].classList.remove("active")
            // del_childs()
        }
    }
}

function createTabContent(tabName){
    if (tabName === "Home"){
        createTabContentHome()
    }
    else if (tabName === "CV"){
        createTabContentCV()
    }
    else if (tabName === "Contact") {
      createTabContentContact()
    }
}

function createTabContentHome(){
    divContent = document.getElementsByClassName("tab-content")[0]
    del_childs(divContent)
    divHome = createDivByIdClass("Home", "tab-pane", "fade", "active", "in")
    divContent.appendChild(divHome)
    var divRow = createDivByClass("row")
    divContent.appendChild(divRow)
    createHomeColumns(divRow)
}

function createHomeColumns(divRow){
    divcol1 = createCol1()
    divRow.appendChild(divcol1)
    divcol2 = createCol2()
    divRow.appendChild(divcol2)
}

function createCol1(){
    let divCol = createDivByClass("col-sm-3")
    divCol.appendChild(getImgTag())
    divCol.appendChild(createHeading("h3", "Abhiram Singh"))
    divCol.appendChild(getAddress())
    divCol.appendChild(document.createElement("p"))
    divCol.appendChild(getAddress1())
    return divCol
}

function getEmail(){
    details = document.createElement("p")
    details.innerHTML = "Email: abhiram@cse.iitb.ac.in"
    return details
}

function getAddress1(){
    div = document.createElement("div")
    div.innerHTML = "Address: SIC 210, Gigabit Networking Laboratory,"
    div1 = document.createElement("div")
    div1.innerHTML = "Kresit Building, CSE Department, IIT Bombay, India, 400076"
    div.appendChild(div1)
    
    div2 = document.createElement("div")
    div2.innerHTML = "More details: "
    div2.appendChild(initAnchor("Github, ", "https://github.com/abhiramsingh0"))
    div2.appendChild(initAnchor("Linkedin, ", "https://www.linkedin.com/in/abhiram-singh"))
    div2.appendChild(initAnchor("Google scholar", "https://scholar.google.com/citations?user=UD0QmwUAAAAJ&hl=en&authuser=1"))
    div.appendChild(div2)
    return div
}

function initAnchor(innerVal, ref){
    a = document.createElement("a")
    a.innerHTML = innerVal
    a.href= ref
    return a
}

function getAddress(){
    details = document.createElement("p")
    div = document.createElement("div")
    div.innerHTML = "PhD student"
    details.appendChild(div)
    div = document.createElement("div")
    div.innerHTML = "Computer Science and Engineering"
    details.appendChild(div)
    div = document.createElement("div")
    div.innerHTML = "Indian Institute of Technology Bombay"
    details.appendChild(div)
    return details
}

function createCol2(){
    let divCol = createDivByClass("col-sm-9")
    h2 = createHeading("h2", "About Me")
    divCol.appendChild(h2)
    details = document.createElement("p");
    details.innerHTML = get_my_details()
    divCol.append(details)
    h2 = createHeading("h2", "Publications")
    divCol.appendChild(h2)
    h3 = createHeading("h3", "Journals")
    divCol.appendChild(h3)
    ul_journal = create_journals()
    divCol.appendChild(ul_journal)
    h3 = createHeading("h3", "Conferences")
    divCol.appendChild(h3)
    ul_conf = create_conferences()
    divCol.appendChild(ul_conf)
    h3 = createHeading("h3", "Preprint")
    divCol.appendChild(h3)
    ul_preprint = create_preprint()
    divCol.appendChild(ul_preprint)
    h3 = createHeading("h3", "Patent")
    divCol.appendChild(h3)
    ul_patent = create_patents()
    divCol.appendChild(ul_patent)
    return divCol
}

function createButton(dataTarget){
    let butn = document.createElement("button")
    butn.classList.add("btn", "btn-outline-primary", "btn-sm")
    butn.type = "button"
    butn.dataset.toggle = "collapse"
    butn.dataset.target = "#"+dataTarget
    butn.ariaExpanded = false
    butn.innerHTML = "abstract"
    return butn
}
function linkButton(targetLink){
    let butn = document.createElement("a")
    butn.classList.add("btn", "btn-outline-primary", "btn-sm")
    butn.role = "button"
    butn.target = "_blank"
    butn.innerHTML = "pdf"
    let link_list = getPageLinks()
    butn.href = link_list[targetLink]
//     console.log(targetLink)
    if (butn.href[butn.href.length-1] === "#"){
        console.log()
        butn.classList.add("disabled")
        butn.tabIndex = -1
        butn.ariaDisabled = true
    }
    return butn
}

function create_journals(){
    let ul = document.createElement("ul");
    let keyVal = ["Grafnet", "JNM", "JLT", "WN"]
    list = getJournalObj()
    for (let i = 0; i<list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i]
        li.append(createButton(keyVal[i]))
        li.append(linkButton(keyVal[i]))
        li.appendChild(createAbstractJour(keyVal[i]))
        ul.appendChild(li)
    }
    return ul
}

function createAbstractJour(name){
    absDiv = document.createElement('div');
    absDiv.id = name
    absDiv.classList.add("collapse")
    cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "card-body")
    // cardDiv.style.color = "lightgray"
    absDict = getJournalAbs()
    cardDiv.innerHTML = absDict[name]
    absDiv.appendChild(cardDiv)
    return absDiv
}

function create_conferences(){
    ul = document.createElement("ul");
    keyVal = ["TAPIN", "ICCCN", "ICCICCT"]
    list = getConferenceObj()
    let link_list = getPageLinks()
    for (let i = 0; i<list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i]
        li.append(createButton(keyVal[i]))
        li.append(linkButton(keyVal[i]))
        li.appendChild(createAbstractConf(keyVal[i]))
        ul.appendChild(li)
    }
    return ul
}

function createAbstractConf(name){
    absDiv = document.createElement('div');
    absDiv.id = name
    absDiv.classList.add("collapse")
    cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "card-body")
    // cardDiv.style.color = "lightgray"
    absDict = getConfAbs()
    cardDiv.innerHTML = absDict[name]
    absDiv.appendChild(cardDiv)
    return absDiv
}

function create_preprint(){
    ul = document.createElement("ul");
    keyVal = ["JNM2"]
    list = getPreprintObj()
    let link_list = getPageLinks()
    for (let i = 0; i<list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i]
        li.append(createButton(keyVal[i]))
        li.append(linkButton(keyVal[i]))
        li.appendChild(createAbstractPreprint(keyVal[i]))
        ul.appendChild(li)
    }
    return ul
}

function createAbstractPreprint(name){
    absDiv = document.createElement('div');
    absDiv.id = name
    absDiv.classList.add("collapse")
    cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "card-body")
    // cardDiv.style.color = "lightgray"
    absDict = getPreprintAbs()
    // console.log(absDict)
    cardDiv.innerHTML = absDict[name]
    absDiv.appendChild(cardDiv)
    return absDiv
}


function create_patents(){
    ul = document.createElement("ul");
    keyVal = ["Grafnet1"]
    list = getPatentObj()
    let link_list = getPageLinks()
    for (let i = 0; i<list.length; i++){
        let li = document.createElement('li');
        li.innerHTML = list[i]
        li.append(createButton(keyVal[i]))
        li.append(linkButton(keyVal[i]))
        li.appendChild(createAbstractPatent(keyVal[i]))
        ul.appendChild(li)
    }
    return ul
}

function createAbstractPatent(name){
    absDiv = document.createElement('div');
    absDiv.id = name
    absDiv.classList.add("collapse")
    cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "card-body")
    // cardDiv.style.color = "lightgray"
    absDict = getPatentAbs()
    // console.log(absDict)
    cardDiv.innerHTML = absDict[name]
    absDiv.appendChild(cardDiv)
    return absDiv
}

function getImgTag(){
    var img = document.createElement("img");
    img.src = "my_pic.jpg";
    img.classList.add("img-fluid", "img-thumbnail");
    img.alt="Pic of Abhiram Singh"
    img.style.width = "80%"
    img.style.marginTop = "25px"
    img.style.borderRadius = "10px"
    return img
}

function createTabContentCV(){
    divContent = document.getElementsByClassName("tab-content")[0]
    del_childs(divContent)
    divCV = createDivByIdClass("CV", "tab-pane", "fade", "active", "in")
    divContent.appendChild(divCV)
    divEmbed = createDivByClass2("embed-responsive", "embed-responsive-16by9")
    divCV.appendChild(divEmbed)
    objTag = createObjTag("embed-responsive-item", "cv.pdf", "application/pdf")
    divEmbed.append(objTag)
}

function del_childs(divContent=""){
    divContent = document.getElementsByClassName("tab-content")[0]
    // console.log(divContent.hasChildNodes)
    while (divContent.hasChildNodes()) {
        divContent.removeChild(divContent.lastChild)
    }
}

function createObjTag(className, fileName, typeFile){
    let objTag = document.createElement("object");
    objTag.classList.add(className);
    objTag.data = fileName;
    objTag.type = typeFile;
    return objTag
}

function createDivByIdClass(id, class1, class2, class3, class4){
    let div = document.createElement("div");
    div.id = id
    div.classList.add(class1, class2, class3, class4);
    return div
}

function createDivByClass2(class1, class2){
    let div = document.createElement("div");
    div.classList.add(class1, class2);
    return div
}

function get_my_details(){
    details =  `I am a Ph.D. student in the CSE dept of IIT Bombay and working with my supervisor Dr. Ashwin Gumaste.
                My research interest lies at the intersection of Machine Learning and Computer Networks.
                I am currently working on the intelligent computation models for routing in IP networks and developing network verification tools. 
                I have also worked in the exciting area of the Brain-computer interface.
                In the past, I have completed my M.Tech from CSE dept., NIT Hamirpur, India, where I have worked in wireless sensor networks with Prof. T. P. Sharma.
                I also have an industry experience in Aricent, where I worked as a software engineer.`
    return details
}

function getJournalObj(){
    papers = [`Abhiram Singh, Sidharth Sharma, Ashwin Gumaste and Jianping Wang, "Grafnet: Using Graph Neural Networks to Create Table-Less Routers", Accepted in IEEE Transactions on Network Science and Engineering (TNSE).`,
                `Abhiram Singh and Ashwin Gumaste, "Decoding imagined speech and computer control using brain waves", Accepted in Elsevier Journal of Neuroscience Methods, 2021.`,
                `Sidharth Sharma, Abhiram Singh, Ashwin Gumaste and Biswanath Mukherjee, "Light-trail Design for 5G Backhaul: Architecture, SDN Impact and Coordinated Multipoint", Accepted in IEEE/OSA Journal of Lightwave Technology (JLT), 2021.`,
                'Abhiram Singh and T. P. Sharma, "Position and hop-count assisted full coverage control in dense sensor networks", Accepted in Springer Journal of Wireless Networks, 2015.'
            ]
    return papers
}

function getConferenceObj(){
    papers = [`Abhiram Singh, Aniruddha Kushwaha and Ashwin Gumaste, "TAP-IN: Table Address Prediction using Intelligent Learning for SDN Networks", to be submitted in IEEE Transactions on Emerging Topics in Computing.`,
                `Abhiram Singh, Sidharth Sharma and Ashwin Gumaste, "Using Deep Reinforcement Learning for Routing in IP Networks", Accepted in IEEE 30th International Conference on Computer Communications and Networks (ICCCN), 2021.`,
                `Abhiram Singh and T. P. Sharma, "A survey on area coverage in wireless sensor networks", Accepted in IEEE International Conference on Control, Instrumentation, Communication and Computational Technologies (ICCICCT), 2014.`,
            ]
    return papers
}

function getPreprintObj(){
    papers = [`Abhiram Singh and Ashwin Gumaste, "Interpreting Imagined Speech Waves with Machine Learning techniques", arXiv preprint arXiv:2010.03360, 2020.`,
            ]
    return papers
}

function getPatentObj(){
    papers = [`Abhiram Singh, Sidharth Sharma and Ashwin Gumaste, "Using Graph Neural Networks to Create Table-Less Routers", Granted, USPTO Patent Number: 11310119.`,
            ]
    return papers
}

function getJournalAbs(){
    abstract = {"Grafnet": `Grafnet, a Graph Neural-Network (GNN)-based scheme learns IP-address-to-port mapping, leading to forwarding table-less routers. GNNs allow mapping network-wide features like adjacencies and addresses to generate new representations. Grafnet converts network-wide IP addresses to a feature space using GNNs. GNNs extrapolate node adjacencies onto a feature matrix, whose output tells which address/subnet is connected to a node and port. To do so, we use a GNN in conjunction with an Artificial Neural Network (ANN), whose output transforms graph adjacencies to address-based adjacencies. We exploit the fact that IP addresses are present in contiguous groups (subnets) or 'ranges'. Large range sizes imply a better likelihood of Grafnets’ approximation, though with enough learning Grafnet learns just about all network-wide IP addresses, irrespective of range sizes. Grafnet is evaluated as an SDN scheme on (1) 75-node US-core network and (2) 2000-node, 5 million IP address-based random WAN topology. Analytically, we show equivalence between Grafnet and a Feed-forward neural network implying exhaustiveness and correctness. The proposed Grafnet model is able to work as a direct address translator without the need for tables in the forwarding plane of a router. Engineering considerations to implement Grafnet are also discussed.`,
                "JNM": `In this work, we explore the possibility of decoding Imagined Speech brain waves using machine learning techniques. We propose a covariance matrix of Electroencephalogram channels as input features, projection to tangent space of covariance matrices for obtaining vectors from covariance matrices, principal component analysis for dimension reduction of vectors, an artificial feed-forward neural network as a classification model and bootstrap aggregation for creating an ensemble of neural network models. After the classification, two different Finite State Machines are designed that create an interface for controlling a computer system using an Imagined Speech-based BCI system. The proposed approach is able to decode the Imagined Speech signal with a maximum mean classification accuracy of 85% on binary classification task of one long word and a short word. We also show that our proposed approach is able to differentiate between imagined speech brain signals and rest state brain signals with maximum mean classification accuracy of 94%. We compared our proposed method with other approaches for decoding imagined speech and show that our approach performs equivalent to the state of the art approach on decoding long vs. short words and outperforms it significantly on the other two tasks of decoding three short words and three vowels with an average margin of 11% and 9%, respectively. We also obtain an information transfer rate of 21-bits-per-minute when using an IS based system to operate a computer. These results show that the proposed approach is able to decode a wide variety of imagined speech signals without any human-designed features.`,
                "JLT": `5G promises to be revolutionary from the perspective of offering unprecedented bandwidth to the end-user. In this pursuit, the limited spectrum of the wireless overlay further constricted by distance, requires strong support from a backhaul network. Such a strong backhaul network should provide large bandwidth pipes at near-proximity to the end-user at low-costs and using pragmatic technology. Naturally an optical solution is best suited to meet the voluminous bandwidth requirements of the backhaul. This optical solution has to cater to dynamic bandwidth needs among base stations, provide for rapid and smart provisioning to meet the requirement of new features such as Coordinated Multipoint (CoMP) among base-stations, and yet be low-cost. To this end, we propose the use of light-trails -- a generalization of a lightpath that provides for dynamic bandwidth communication, sub-wavelength granularity and optical layer multicasting using contemporary optics. We observe that each feature of a light-trail, i.e. dynamic provisioning, optical multicast and sub-wavelength grooming are strongly desired by the 5G backhaul, implying a clear mapping between the two. We investigate the usage of light-trails as a 5G backhaul solution. We discuss the proposed architecture of light-trails for micro cells, pico, and femto cells as well as for macro cells. We present the light-trail design problem for 5G backhaul as a constrained optimization problem. We also present the coordinated multipoint problem mapped onto light-trails and propose an optimized solution for such a mapping. A dynamic virtual topology growth algorithm for the backhaul is also presented and extensively evaluated. The light-trails approach is compared to other approaches including the use of an SDN controller and significant performance benefits are observed.`,
                "WN": `In recent years, wireless sensor networks (WSNs) have gained much attention due to its various applications in military, environmental monitoring, industries and in many others. All these applications require some target field to be monitored by a group of sensor nodes. Hence, coverage becomes an important issue in WSNs. This paper focuses on full coverage issue of WSNs. Based on the idea of some existing and derived theorems, Position and Hop-count Assisted (PHA) algorithm is proposed. This algorithm provides full coverage of the target field, maintains network connectivity and tries to minimize the number of working sensor nodes. Algorithm works for communication range less than root three times of sensing range and it can be extended for arbitrary relation between communication range and sensing range. By using hop-count value, three-connectivity in the network is maintained. Also, neighbors information is used to create logical tree structure which can be utilized in routing, redundant data removal and in other areas. Simulation results show that PHA algorithm outperforms layered diffusion-based coverage control algorithm by providing better area coverage and activating fewer nodes.`,
            }
    return abstract
}

function getConfAbs(){
    abstract = {"TAPIN": `Match-table lookups are crucial for forwarding a packet in a network element (switch or router). While dedicated ASICs are used for match-action and lookup purposes, with the advent of programmability in the data-plane, one question that arises is whether such match-table lookups can be implemented in an FPGA. The limited on-FPGA memory restricts the number of rules that can be implemented, while off-chip memories are often too slow to operate at wire-speed operation. The recent availability of the High Bandwidth Memory (HBM) within FPGAs has made it possible to store millions of rules. However, performing table lookup at a high line-rate (10G/100G) is still a challenge. In this paper, we present a machine learning model (TAP-IN) for predicting an index (address) for a given IP address in a sorted match table. Instead of predicting the exact index, TAP-IN predicts a pseudo index, which is in the vicinity of the exact index, such that by further examination of just a few entries above or below the predicted pseudo-index, the exact match is obtained. In this paper, we proposed a machine learning model using Polynomial regression that work with software defined networks (SDN). To the best of our knowledge, this approach has never been applied to perform match table lookup. We have implemented TAP-IN on a Xilinx Virtex Ultrascale+ FPGAs having 64Gb of HBM. Our implemented models provide a throughput of 450 million lookups per second for IPv4 based lookup with one million rules in the match table, that translates to a line-rate of 230 Gbps for 64 bytes packets and 5.4 Tbps for 1518 bytes of packets.`,
                "ICCCN": `This paper proposes Trailnet, a deep reinforcement learning approach to predict the output port (of a router) for an IP packet based on its destination IP address. Trailnet attempts to replace the forwarding table at an IP router with a computational model. To optimally learn each router's forwarding decisions, we propose to train the Artificial Neural Network (ANN) of Trailnet with value iteration and stochastic gradient descent. Through the value iteration algorithm, Trailnet estimates the cost of IP packet forwarding along different ports of a router and eventually selects a port that optimizes a cost function. We evaluate the generalization capability of the ANN on two sufficiently large service provider's network topologies containing millions of IP addresses. Our evaluations show that Trailnet achieves high accuracy and fast inference time for predicting the correct output ports for incoming IP packets. Our results support the claim of replacing forwarding tables and distributed protocols (for computing shortest paths) with a computation model while operating at a high line rate in IP routers.`,
                "ICCICCT": `In recent years, Wireless Sensor Networks (WSNs) have gained much attention because of its varying applications from catastrophic region to industrial and household region. In few applications, sensors are deployed in extreme environmental conditions. Hence, node access is not possible in that scenario. Therefore, a large number of sensor nodes are deployed in the target field so that node replacement problem is eliminated. Also, coverage is a very important parameter because it measures how effectively a target field is monitored by the sensor network. This paper focuses on the coverage issue in wireless sensor networks. Initially, three different types of coverage issues are discussed. Then, full coverage issue is examined by considering different points such as node type, deployment type, relation of communication range to sensing range, strategy used to detect full coverage and positioning based/independent algorithms. Some applications of wireless sensor networks are given. Finally, research challenges in the field of area coverage are discussed.`
    }
    return abstract
}

function getPreprintAbs(){
    abstract = {"JNM2": `This work explores the possibility of decoding Imagined Speech (IS) signals which can be used to create a new design of Human-Computer Interface (HCI). Since the underlying process generating EEG signals is unknown, various feature extraction methods, along with different neural network (NN) models, are used to approximate data distribution and classify IS signals. Based on the experimental results, feed-forward NN model with ensemble and covariance matrix transformed features showed the highest performance in comparison to other existing methods. For comparison, three publicly available datasets were used. We report a mean classification accuracy of 80% between rest and imagined state, 96% and 80% for decoding long and short words on two datasets. These results show that it is possible to differentiate brain signals (generated during rest state) from the IS brain signals. Based on the experimental results, we suggest that the word length and complexity can be used to decode IS signals with high accuracy, and a BCI system can be designed with IS signals for computer interaction. These ideas, and results give direction for the development of a commercial level IS based BCI system, which can be used for human-computer interaction in daily life.`
    }
    return abstract
}
function getPatentAbs(){
    abstract = {"Grafnet1": `Methods and apparatuses for using a neural network based model to predict an output port for a destination Internet Protocol (IP) address in a network are described. Some embodiments can construct an untrained model comprising a graph neural network (GNN), a first artificial feed-forward neural network (ANN), and a second ANN. Next, the embodiments can train the untrained model to obtain a trained model by: training the first ANN using at least IP addresses of destination nodes in the network, training the GNN using at least an adjacency matrix of the network and initial node features computed using the IP addresses of destination nodes in the network, and training the second ANN by combining the output of the first ANN and an output of the GNN using an attention mechanism. The embodiments can then use the trained model to predict the output port for the destination IP address.`
    }
    return abstract
}

function getPageLinks(){
    links = {
        "Grafnet": `https://ieeexplore.ieee.org/document/9645377`,
        "JNM": `https://arxiv.org/pdf/1911.04255.pdf`,
        "JLT": `https://ieeexplore.ieee.org/abstract/document/9447986`,
        "WN": `https://doi.org/10.1007/s11276-014-0810-2`,
        "TAPIN": `#`,
        "ICCCN": `https://ieeexplore.ieee.org/abstract/document/9522197`,
        "ICCICCT": `https://doi.org/10.1109/ICCICCT.2014.6993073`,
        "JNM2": `https://arxiv.org/pdf/2010.03360.pdf`,
        "Grafnet1": `https://patents.google.com/patent/US20210297324A1/en`,
    }
    return links
}

function createTabContentContact() {
  divContent = document.getElementsByClassName("tab-content")[0]
  del_childs(divContent)
  divMessage = document.createElement("div");
  divContent.appendChild(divMessage)
  divMessage.innerHTML = '';
  divContact = createDivByIdClass("form-container", "tab-pane", "fade", "active", "in")
  divContent.appendChild(divContact)
  divContact.innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9uE09VB7KZ4vGF4roiDqofGSRFGuBCtyQFO2sZjNRM-hg7w/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
}

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64e9e891b2d3e13950ec3cb7/1h8or8uu6';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
