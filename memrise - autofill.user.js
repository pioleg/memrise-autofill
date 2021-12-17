// ==UserScript==
// @name         Memrise - autofill
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://app.memrise.com/aprender/review?course_id=*
// @match        https://app.memrise.com/aprender/learn?course_id=*
// @icon         https://www.google.com/s2/favicons?domain=memrise.com
// @downloadURL  https://raw.githubusercontent.com/pioleg/memrise-autofill/main/memri
// @updateURL    https://github.com/Anarios/return-youtube-dislike/raw/main/Extensions/UserScript/Return%20Youtube%20Dislike.user.js
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

//-- Remove Tampermonkey warnings about jQuery
let $ = window.$;
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

var check = function() {
    $('.sc-dlnjwi.cmdNXR.sc-1r45oz1-0.boVotz.r1ec2z-3.gVLwcN button').click()
}

$(document).ready(function() {
    $(document).bind('keydown',function(e){
       if(e.ctrlKey) {
           location.reload();
       }
       if(e.keyCode == 8) {
           var instruction = $("[data-testid=instruction]").text();
           var test = $("[data-testid=testLearnableCard]");
           var word = $(".sc-9f618z-2.gaPucC").text().replace(/ +(?= )/g,'');
           var urlParams = new URLSearchParams(window.location.search);
           var course_id = urlParams.get('course_id');
           var id;
           console.log({instruction});
           console.log({word});
           console.log({course_id});
           for (let i = 0; table.length > i; i++) {
               console.log(table[i][0][0]);
               if (table[i][0][0] == course_id) {
                   id = i;
                   break
               }
           }
           console.log({id});
           if(instruction=="Type the correct translation") {
               for (let i = 1; table[id].length > i; i++) {
                   console.log(table[id][i][0]);
                   if (table[id][i][1] == word) {
                       $("input").val($("input").val()+table[id][i][0]+' ');
                       break
                   }
               }
               setTimeout(check, 10);
           }
           //if(instruction=="Choose the correct translation") {
           if(instruction=="Pick the correct answer") {
               for (let i = 1; table[id].length > i; i++) {
                   console.log(table[id][i][0]);
                   var answer;
                   if (table[id][i][1] == word) {
                       answer = table[id][i][0];
                       break
                   }
                   if (table[id][i][0] == word) {
                       answer = table[id][i][1];
                       break
                   }
               }
               $('button div').each(function(index, value){
                   if($(this).text().replace(/ +(?= )/g,'') == answer) {
                       this.click();
                       setTimeout(check, 10);
                   }
               });
           }
       }
    });
});

var table = [
	[
		["1378509"], //English for Maths (audio)
		["Aα","alpha"],
		["Bβ","beta"],
		["Γγ","gamma"],
		["Δδ","delta"],
		["Eε","epsilon"],
		["Ζζ","zeta"],
		["Ηη","eta"],
		["Θθ","theta"],
		["Ιι","iota"],
		["Κκ","kappa"],
		["Λλ","lambda"],
		["Μμ","mu"],
		["Νν","nu"],
		["Ξξ","xi"],
		["Oo","omicron"],
		["Ππ","pi"],
		["Ρρ","rho"],
		["Σσ","sigma"],
		["Ττ","tau"],
		["Υυ","upsilon"],
		["Φφ","phi"],
		["Xχ","chi"],
		["Ψψ","psi"],
		["Ωω","omega"]
	],
	[
		["1488016"], //English for Networking and IT Security
		["Computer network","A group of computers linked together for data sharing"],
		["P2P","The model of communication between equally priviledged nodes"],
		["LAN","A computer network that connects devices within a small area"],
		["pLAN","A computer network that connects devices within a personal area (e.g. Bluetooth)"],
		["WAN","A computer network that extends over a large geographical distance"],
		["CAN","A computer network that connects devices within a university campus"],
		["MAN","A computer network that covers the area of a city"],
		["DHCP","The protocol responsible for assigning basic network configuration (IP addresses etc.)"],
		["DNS","The protocol that translates names into IP adresses"],
		["ARP","The protocol that converts IP addresses into MAC addresses"],
		["MAC","A network card's physical address which is represented by a 48-bit integer"],
		["RARP","The protocol that converts MAC address into IP address"],
		["OSI","The model that describes network communication layers and links between them"],
		["IP address","The logical identifier for a computer or device on a TCP/IP network"],
		["ICMP","The protocol responsible for monitoring the state of the network and forwarding errors within it"],
		["Ping","The network utility providing information about reachability of a specified host"],
		["TCP","The transport protocol that ensures the reliable, error-free delivery of packages"],
		["POP3","The third version of the protocol (RFC 1939) usually used by local e-mail clients to retrieve e-mails from a remote server"],
		["UDP","The transport protocol that does not guarantee the data correctness"],
		["FTP (protocol)","The protocol used for the transfer of files between the server and the client"],
		["SMTP","The Internet standard usually used for sending electronic mail (email)"],
		["NTP","The protocol used for time synchronization within computer networks"],
		["HTTP","The protocol used to transfer data from web server"],
		["revDNS","The part of DNS system responsible for translating IP addresses into domain names"],
		["SMB","The protocol used for resource sharing (eg. printers and files)"],
		["CIFS","The another name of SMB protocol"],
		["BitTorrent","The communications protocol which is used for sharing files in P2P"],
		["Telnet","The standard for the protocol responsible for the control of the remote terminal (sending commands etc.)"],
		["SSH","The cryptographic network protocol which allows you to connect to a remote computer system"],
		["CSMA/CA","The protocol used in the Ethernet for tracking the transfer medium state and avoiding collisions"],
		["CSMA/CD","The protocol used in the Ethernet for tracking the transfer medium state and detecting collisions"],
		["IPv4","The fourth version of the Internet Protocol (IP) whoose address is represented by a 32-bit integer"],
		["IPv6","The sixth version of the Internet Protocol (IP) whoose address is represented by a 128-bit integer"],
		["SNMP","The group of protocols used for managing routers, switches and other network devices"],
		["RFC","The formal document from the Internet Engineering Task Force ( IETF )"],
		["WINS","The equivalent of the DNS in Microsoft Windows network"],
		["BOOTP","The UDP-based protocol used for acquiring the configuration from the server by clients. The predecessor of DHCP"],
		["NetBEUI","The no-routable transport protocol used in Windows operating systems family"],
		["TFTP","The simplified version of the FTP"],
		["NetBIOS","The network protocol designed by IBM which allows you to communicate in TCP/IP networks"],
		["IPX","The network layer protocol derived from the XNS protocol. It was repressed by the IP"],
		["Z39.50","The protocol used for search and retrieval of data from a database over TCP/IP. Maintained by the Library of Congress. A predecessor of REST architecture"],
		["IPsec","The network protocol suite that authenticates and encrypts packets of data sent over the network"],
		["Sinec H1","The communications protocol used within SCADA networks. Developed by Siemens, used in the control infrastructure of CERN"],
		["KA9Q","The popular early implementation of the TCP/IP for amateur packet radio systems and smaller personal computers"],
		["GPRP","The Internet Routing Protocol like IPv4 and IPv6 which uses the spatial position"],
		["Switch","The device that connects computers together into a network by using packet switching to receive, process and foward data to the destination device"],
		["Hub","The physical-layer device that allows the connection of several hosts together into a computer network. Forwards packets to each connected host"],
		["Host","The computer or another device connected to a computer network which is identified by a unique address"],
		["Patch cord","The cable that is used for connecting active devices in the network"],
		["RJ-45","The type of the connector that is commonly used in Ethernet networks"],
		["8P8C","The official name of RJ-45 connector"],
		["AP","The network device used to add the possibility of connecting wireless devices to the network"],
		["SCADA","The industrial system designed to provide information about industrial processes and maintaining automated control in power plants, factories etc."],
		["Modem","The device which modulates signals to send data by a transmission channel, and demodulates signals to retrieve incoming data"],
		["TCP/IP Model","The theoretical layer-based network communication model that consists of 4 layers. The most commonly used model"],
		["Unicast","One-to-one transmission"],
		["Multicast","One-to-many transmission"],
		["Router","The networking device that forwards packets between computer networks"],
		["Broadcast","One-to-all transmission"],
		["Bridge","The computer networking device that creates a single aggregate network from multiple communication networks or network segments for example aggregates different-media networks"],
		["Simplex","The kind of transmission in which data flows only in one direction."],
		["Half-duplex","The kind of transmission in which data flows in both directions but one at time"],
		["Full-duplex","The kind of transmission in which data flows in both directions simultaneously"],
		["Repeater","The electronic device that receives a weak signal and retransmits it with full strength"],
		["VPN","The connection between two networks that is tunneled (and usually encrypted) via another network"],
		["Network adapter","The adapter which connects device to a computer network"],
		["WWW","The part of Internet that operates within commonly known protocols like HTTP. Consists of web pages"],
		["Star network","The network topology which consists of one central node that connects all devices togehter"],
		["Ring network","The computer network configuration where the devices are connected to each other in a circular shape. Each packet is sent around the ring until it reaches its final destination."],
		["Bus network","The network topology in which nodes are directly connected to a common linear half-duplex link called a bus"],
		["Point-to-point","The simplest topology with a dedicated link between two endpoints"],
		["Fully connected network","The network topology in which all nodes are interconnected"],
		["Packet switching","The communications method that groups all transmitted data into packets"],
		["Physical Layer","The lowest layer in the OSI model, responsible for transmitting data bits from one device to the other one by determining clock rates and bits representation"],
		["Data-link layer","The second layer of the OSI model. Responsible for connections handling, integrality checks and determining the route between systems"],
		["Network layer","The third layer of the OSI model. Responsible for routing and control functions providing informations about routes during the packet exchange between networks"],
		["Node","The connection point that can receive, create or send data in network"],
		["Transport layer","The fourth layer of the OSI model. This layer is responsible for setting-up connections and segmentating data acquired from the network layer. Handles connection-oriented and connectionless communication"],
		["Session layer","The fifth layer of the OSI model. It is responsible for creating sessions and provides services responsible for sessions handling and security"],
		["Connection-oriented communication","The network communication model in which communication session is estabilished before any useful data can be transfered"],
		["Connectionless communication","The data transmission method used in packet switching networks in which each data unit is individually addressed and routed"],
		["Print server","The device that connects printers to client computers over a network"],
		["Presentation layer","The sixth layer of OSI model that formats data provided by application and session layer and encrypts data sent from the application layer"],
		["Applications layer","The seventh layer of the OSI model that consists of user's software"],
		["Database server","The computer program that provides database services to other computers"],
		["Mailing list server","The server that manages mailing lists for groups of users"],
		["PM","The modulation based on switching a signal on and off according to bits values"],
		["AM","In this modulation data is mapped into the amplitude of transmitted signal (amplitude above the given threshold is interpreted as logical 1)"],
		["FM","In this modulation data is represented as fluctuation in signal frequency"],
		["SAN","A network which provides access to consolidated, block level data storage"],
		["G band","30 EHz-300 EHz frequency range with 10pm-1pm wavelength"],
		["HX band","3 EHz - 30 EHz range with 100pm - 10pm wavelength"],
		["Interplanetary Internet","The conceived computer network in space, consisting of a set of network nodes that can communicate with each other"],
		["SX band","30 PHz - 3 EHz with 1nm - 100 pm wavelength"],
		["EUV","3 PHz - 30 PHz with 100nm-10nm wavelength"],
		["NUV","300 THz - 3 PHz with 1 ?m - 100 nm wavelength"],
		["NIR","30 THz - 300 THz with 10?m - 1?m wavelength"],
		["MIR","3 THz - 30 Thz with 100 ?m - 10 ?m wavelength"],
		["Broadband","Wide bandwidth transmission which transports multiple signals"],
		["FIR","300 GHz - 3 THz with 1mm - 100?m wavelength"],
		["EHF","30 GHz - 300 GHz with 1cm - 1mm wavelength"],
		["SHF","3 GHz - 30 GHz with 10cm - 1cm wavelength"],
		["UHF","300 MHz - 3 GHz with 100cm - 10cm"],
		["VLSM","A method of IPv4 network adressing in which the length of the subnet mask may vary"],
		["VHF","3 MHz - 300 Mhz with 10m - 1m wavelength"],
		["HF","3 MHz - 30 MHz with 100m - 10m wavelength"],
		["MF","300 kHz - 3 MHz with 1km - 100m wavelength"],
		["LF","30 kHz - 300 kHz with 10km - 1km wavelength"],
		["VLF","3 kHz - 30 kHz with 100km - 10 km wavelength"],
		["VF/ULF","300Hz - 3kHz with 1000km - 100km wavelength"],
		["SLF","30 Hz - 300 Hz with 10000 km - 1000 km wavelength"],
		["ELF","3Hz - 30 Hz with 100000 km - 10000 km wavelength"],
		["STP","The type of cable that is covered with additional layer of the metal wire mesh which protects the cable from the environment noise"],
		["FTP (cable)","The type of cable that is covered with the grounded foil that offers similar protection against environment noise as the STP cable but on a lower scale"],
		["UTP","The basic type of the cable that is used in computer networks. It consists of eight wires"],
		["Coaxial cable","The thick cable with a wire inside that provides wide broadband and high connection availability"],
		["Sneakernet","Non-automated data transmission via USB memory sticks, flash cards etc."],
		["Network topology","Description of the collocation of network elements and associations between them"],
		["Physical topology","It describes physical arrangement of network devices with connections between them"],
		["Logical topology","It is a mapping of paths between nodes in given protocols"],
		["Network Protocol Stack","It is a mapping of the model used to describe network transactions initiated in one device and ending in another"],
		["Encapsulation","The process of joining metadata to data while sending data between layers"],
		["Onion routing","The routing based on encrypting data for the anonymous internet browsing"],
		["Frame Relay","The technology that specifies the physical and data link layers of digital telecommunications channels using packet switching"],
		["WPA","The security standard for devices using wireless connection (Wi-Fi) which encrypts data through the temporal key integrity protocol"],
		["WEP","The security algorithm for IEEE 802.11 wireless networks which uses static encryption key"],
		["LDAP","The protocol designed for using directory services via IP network"],
		["CRC","The algorithm that calculates 32-bit checksum of a message and compares it with the checksum that is stored inside of the packet. Used to detect the data corruption"],
		["Checksum","Fixed-length value calculated from a message for various purposes like security, data integrity checks etc."],
		["Entity (OSI)","Active element located in the OSI layer. It can be a software module or a functional part of a device"],
		["Service Provider","One or multiple entities that communicate with a higher layer of the OSI model"],
		["Service subscriber","The entity that uses services"],
		["SAP (OSI)","The address used for connecting to the service provider"],
		["IDU (OSI)","A piece of data that is sent between two entities via SAP"],
		["SDU (OSI)","A unit of data that has been passed down from an OSI layer to a lower layer and has not been encapsulated yet"],
		["PDU (OSI)","A unit of data that is created when a layer of the OSI model needs additional operations (like fragmentation) on data. It is composed with a header determining its position in stream or properties"],
		["PSTN","The most commonly used telephone network standard. Consists of POTS and ISDN services"],
		["POTS","The oldest telephone service. It is the analog voice transmission in 300-3400 Hz frequency range with DTMF signaling system"],
		["ISDN","The technology that allows usage of old PSTN networks for providing access to new digital services"],
		["DTMF","Signaling system used in old telephone networks. It is used to send control commands via telephone networks using audio tones (you can hear those commands as sounds in your phone)"],
		["WMI","The technology used in publishing information about the host and receiving information from other hosts in Windows networks"],
		["Multiplexing","It's a technique of sending several signals through one transmission medium"],
		["Bandwidth","The difference between the highest and the lowest frequency"],
		["VoIP","The technology used in transfering voice via the Internet Protocol"],
		["Baud","Number of distinct signal changes within transmission medium"],
		["TDM","Multiplexation that divides stream of data using time frames. A chunk of data that corresponds to given time-frame is sent by the transmission medium"],
		["TDMA","Sharing one TDM network between many transmitters"],
		["QoS","Description of overall performance of Network, Telephony or Cloud Computing services"],
		["MAU","Device which allows you to connect multipe devices in a star topology"],
		["E-carrier","Technology of transmiting voice, replaced by the Ethernet"],
		["FDM","Multiplexation that divides stream of data into different frequencies carried by a transmission medium"],
		["FDMA","Sharing one FDM network between many transmitters"],
		["T1","The digital telephone standard which is able to transmit up to 24 multiplexed voice"],
		["WDM","Multiplexation that divides stream of data into several rays with different wavelengths. Commonly used in fiber-optic networks"],
		["Jitter","Deviation from true periodicity of signal resulting in local change of amplitude, frequency or phase"],
		["ADM","A kind of multiplexer used in in fiber-optic networks. Based on FP interferometer used to separate or join beams of light"],
		["ROADM","The configurable version of ADM multiplexer. Often used in metropolitan area networks (MANs)"],
		["Wander","The phenomenon similar to Jitter, but it cannot be damped. It concers clock signals"],
		["MIMO","Communication channel created using signal polarization. It allows transmission of more than one data streams through one medium. Commonly used in SatTV"],
		["Polarization","The property applying to transverse waves that specifies the geometrical orientation of the oscillations"],
		["FHSS","The technology of multiplexation which uses rapidly changing frequency of the carrier signal in pseudorandom manner. Transmitter and receiver know the order of frequencies, but for other devices this transmission is a noise"],
		["DMZ","The subnetwork that separate LAN from other networks. Servers and services are located inside it, so there is access from internet but the local network is unreachable"],
		["ISP","The company that provides access to the Internet for a fee."],
		["NAT","It is a process where a network device, usually a NAT server, assigns a public address to a computer (or group of computers) inside a private network"],
		["DCE","These are computer hardware devices used to establish, maintain and terminate communication network sessions between a data source and its destination"],
		["DTE","It is an end instrument that converts user information into signals or reconverts received signals"],
		["DRM","These are various access control technologies that limit the usage of digital content and devices"],
		["DoS","Any type of attack where the attackers (hackers) attempt to prevent legitimate users from accessing the service by blocking it with multiple requests"],
		["DDoS","It is a type of computer attack that uses a number of hosts to overwhelm a server, causing a website to experience a complete system crash"],
		["AD","It is the Windows OS directory service that facilitates working with interconnected, complex and different network resources in a unified manner"],
		["EGP","It is an obsolete routing protocol that was used for data exchange between neighboring gateway hosts in autonomous systems"],
		["BGP","It is a routing protocol used to transfer data and information between different host gateways, the internet or autonomous systems"],
		["IGP","It is an Interior Gateway Protocol that uses packet-switched networks to support efficient autonomous system routing for internet service providers and large enterprises"],
		["EIGRP","It is an advanced distance vector routing protocol based on the principles of the Interior Gateway Routing Protocol (IGRP)"],
		["OSPF","It is a link state routing protocol (LSRP) that uses the Shortest Path First (SPF) network communication algorithm (Dijkstra's algorithm) to calculate the shortest connection path between known devices"],
		["RIP","It is a dynamic protocol used to find the best route or path from end-to-end (source to destination) over a network by using a routing metric/hop count algorithm"],
		["IS-IS","It is a dynamic class routing protocol used by autonomous system routers running on TCP/IP hosts"],
		["IGRP","It is a proprietary distance vector routing protocol used to communicate routing information within a host network"],
		["TOE","A technique of transferring tasks related to TCP stack computations from the CPU to the NIC"],
		["VIA","The abstract model of a user-level zero-copy network used for standardize the interface for high-performance network technologies"],
		["HPC","It is a definition used to describe systems characterised by high computational performance or high speed of output data generation"],
		["InfiniBand","The standard of the open serial multichannel I/O interface with a high speed and a short latency time"],
		["NDR","It is a version of InfiniBand with the highest transmission rate"],
		["SETI@Home","It is a volunteer project which purpose it to analyze radio signals, searching for signs of extraterrestrial intelligence etc. Anybody can participate in SETI@Home program."],
		["Twinax","A type of coaxial cable with two conductors instead of one. Used in a short-distance high speed applications"],
		["GAMMA","It is a low-latency protocol for Gigabit Ethernet clusters running Linux"],
		["RDMA","The technology that allows computers in a network to exchange data in main memory without involving the processor, cache or operating system of either computer"],
		["iWARP","The extended version of the VIA for IP networks"],
		["Cluster","A set of connected computers that can be viewed as a single computer system"],
		["SCTP","It is a transport-layer protocol similar to the UDP and TCP protocol"],
		["Lockstep","It is a technology that uses replicated, fault-tolerant hardware components that process the same instructions at the same time.Developed by the Stratus ©"],
		["SOA","It is a style of software design where services are provided to the other components by application components, through a communication protocol over a network"],
		["Beowulf Cluster","A computer cluster that consists of identical off the shelf computer connected within a small LAN with installed libraries allowing it to perform parallel computations"],
		["MPI","It is a specification for the developers and users of message passing libraries."],
		["PVM","A software system designed to allow a network of heterogeneous machines to be used as a single distributed parallel processor"],
		["AAA Server","It is a device that hosts a AAA service which is responsible for handling user requests for access to a network"],
		["ASA","It is a family of firewall devices produced by Cisco that incorporates the multilayer security"],
		["TCB","The set of all hardware and software components that are critical to computer system's security"],
		["MSG","Software or hardware appliance used to provide a secure communication between a mobile application and backend resources within a company network"],
		["PUF","A value that cannot be cloned. It is used to fingerprint semiconductor circuits like microprocessors. Examples are structural variations within semiconductor or specially designed integrated circuits"],
		["HSM","A computing device that provides cryptoprocessing functionalities such as encryption, key management and generation"],
		["SSL Accelarator","A device that offloads PKI-related computation for TLS and SSL and thus reduces a CPU usage"],
		["Secure Cryptoprocessor","A special SoC solution used to perform specyfic cryptographic function. They are usually built as impenetrable black-box modules"],
		["Impenetrable device","A device that is cased with multiple infiltration-resistant layers like epoxide layers that make penetration or analysis of this device almost impossible without destroying its structure"],
		["Security token","A physical device that grants access to a restricted resource. It can be a stick which display time-determined access codes that are compared with codes generated by a server at the same time. Used in a 2FA"],
		["Disconnected token","A security token which generates access code without an active connection to the authorization system. For example a RSA SecurID"],
		["Connected token","A security token which must be connected to the authorization device (like laptop to which we are trying to log in). For example smart card solutions, mobile phones with authorization via USB app etc."]
	],
	[
		["5973840"], //Advanced English C1-C2 (audio) vol. 2
		["hair of the dog","an alcoholic drink, particularly when taken the morning after to cure a hangover"],
		["coitus","sexual intercourse that includes penetration and ejaculation, a term used in biology and zoology"],
		["come to think of it","when one considers the matter, on reflection; a phrase used when one has had a sudden realization while speaking"],
		["cuckold","a man married to an unfaithful wife, especially when he is unaware or unaccepting of the fact"],
		["cut corners","to skip certain steps in order to do something as easily or cheaply as possible"],
		["cut to the bone","reduced to the lowest possible amount"],
		["cut to the pith","to focus directly on the essential"],
		["cutthroat","fierce, relentless, ruthless, merciless, showing no care or consideration for the harm done to others with whom you are in competition"],
		["dabbler","an amateur who engages in an activity without serious intentions and who pretends to have knowledge, dilettante"],
		["dad dancing","making of embarrassing flamboyant dance moves to pop music by middle-aged men"],
		["Debbie Downer","someone who is constantly making others feel bad or dampening the mood of a group with negative comments"],
		["ditto","as said before; a copy or an imitation; a duplicate of a document; a pokémon that is capable of transforming itself into anything perfectly"],
		["doofus","a slow-witted, incompetent or stupid person, US informal"],
		["Easter egg","a hidden message or feature, as in a video game or DVD; also refers to a traditional religious holiday decoration"],
		["ebony and ivory","two seemingly different things coexisting in harmony that only together create a coherent whole, black and white"],
		["eerie","inspiring inexplicable fear, dread, or uneasiness; strange and frightening; esp. about places and atmosphere"],
		["erstwhile","former, previous; formerly, previously, in the past (formal, archaic)"],
		["expunge","to delete or erase, wipe out, obliterate"],
		["fair and square","honestly, without cheating, following the rules"],
		["fellatio","a method of oral sex where the penis or testicles are stimulated by the partner's mouth"],
		["flip out","to become extremely angry or to lose control of yourself from surprise or shock"],
		["Humpty Dumpty","a short and fat person or a thing that once overthrown or broken cannot be restored or mended; after a nursery rhyme"],
		["mediocre","average, ordinary, undistinguished, barely acceptable but not good enough"],
		["muff diver","one who performs cunnilingus, carpet muncher"],
		["oh boy","a sarcastic expression of delight or joy, surprise, but also dismay, resignation, frustration, or annoyance"],
		["scoop somebody up","to pick somebody up; to lift someone quickly in your arms"],
		["scumbro","a men's fashion style which involves wearing expensive, designer clothing sloppily or cultivating an unfashionable, poorly put together look"],
		["sea legs","the ability to walk steadily on a moving ship; one's comfort level or familiarity with something"],
		["second to none","the very best, better than all the others"],
		["skid row","a district of a city marked by poverty and inferior living conditions, often frequented by vagrants, alcoholics and addicts"],
		["slam dunk","a task so easy that success in it is deemed a certainty; a scoring shot in which a player jumps up and forces the ball down through the basket"],
		["sob one's heart out","to cry loudly for an extended period of time, usually cause of deep sorrow"],
		["stay put","remain somewhere without moving or being moved, in a fixed or established position"],
		["stonks","a term to express a financial decision that resulted in financial gain, mostly used ironically"],
		["sunk into a funk","in a constant long-lasting hopeless decrease of happiness"],
		["switchgrass","a tall North American praire plant used for forage and as a soil stabilizer, being developed as a renewable source of energy"],
		["take a draw","to breathe in smoke from a cigarette into your lungs"],
		["take a stab at","to make an attempt and try something difficult, hard"],
		["take five","take a short break"],
		["tinkerer","someone who likes to experiment with and repair machine parts; historically a traveling mender of metal household utensils"],
		["cover for somebody","to prevent someone from getting into trouble by providing an excuse for them; to do something in place of someone else"],
		["out on a limb","in a position that lacks evidence, certainty or support"],
		["touch-and-go","very uncertain as to the outcome of something, critical"],
		["vestigial tail","something that's present but has no purpose; a rare congenital abnormality, a remnant of a structure found in embryonic life or in ancestral forms"],
		["ahead of the curve","at the forefront of or leading in something, such as a developing situation, field of study or business, social development, etc"],
		["anchor baby","a child born in a country that gives all children born there the right of citizenship, but whose parents are not citizens and do not have the right to live there"],
		["barf","to vomit, to puke; the matter ejected in vomiting"],
		["batten down the hatches","to prepare for a challenging situation"],
		["flaccid","lacking firmness; hanging limply"],
		["goatee","a small chin beard that doesn't cover the chick area, especially one connected to a mustache or trimmed into a point"],
		["be on pins and needles","to be extremely nervous or uneasy, waiting for what is going to happen; in suspense"],
		["bleed six colours","be a fan of Apple Inc."],
		["Big Apple","a nickname for New York City"],
		["cootie","slang name for a head or body louse"],
		["cougar","a mature woman pursuing a younger man for a romantic relationship or a sexual encounter; a puma"],
		["cherry on top","an unnecessary, but welcome, addition to a desirable object or outcome; an allusion to cakes"],
		["throw the baby out with the bathwater","to accidently remove something good in the bid of getting rid of something bad"],
		["pull the trigger","to make a final decision or commit to a certain course of action"],
		["Hail Mary","a traditional catholic prayer to the mother of Jesus"],
		["dead in the water","without any chance for success"],
		["zimmer frame","a walking aid with two wheels in the front, a walker"],
		["barter transaction","the exchange of goods or services in exchange for other goods or services without using a medium of exchange, such as money"],
		["morning after pill","a high-dose oestrogen medication given in the early post-ovulatory period to prevent implantation of a potentially fertilised egg after unprotected intercourse"],
		["traipse around","spend time walking or traveling around in an aimless or carefree search of pleasure"],
		["Lord's Prayer","another name for Our Father or Pater Noster"],
		["tortious interference","a common law tort allowing a claim for damages against a defendant who wrongfully interferes with the plaintiff's contractual or business relationships"],
		["throw a spanner into the works","prevent something from happening smoothly in the way that it was planned by causing a problem or difficulty, maliciously prevent a plan or activity from succeeding"],
		["tenacity","persistant determination, hanging on to something persistantly or stubbornly, relentlessness"],
		["scapegoat","a person or group that is made to carry the blame for others"],
		["spatula","a broad, flat, flexible blade used to mix, spread and lift material including foods, drugs, plaster and paints, in the kitchen it might be used for example to flip burgers"],
		["cross the line","to misbehave or do something unacceptable or inappropriate, go too far"],
		["grim reaper","representation of death as a skeleton in a hooded robe and with a scythe"],
		["have a bee in the bonnet","to keep talking about something again and again because you think it is very important"],
		["behind the curve","not keeping up with current thinking or trends"],
		["bad penny","a person or thing which is unpleasant, disreputable, or otherwise unwanted, especially one which repeatedly appears at inopportune times"],
		["toe-to-toe","(of two people) standing directly in front of one another, especially in order to fight or argue"],
		["bukkake","a sex act in which one participant (or more) is ejaculated on another participant"],
		["taciturn","habitually silent or quiet, inclined to talk very little"],
		["bifurcate","to separate into two parts or branches"],
		["blessing in disguise","a seeming misfortune that turns out to be for the best"],
		["clandestine","kept or done in secret, often to conceal an illicit or improper purpose"],
		["keep at bay","to keep someone or something at a distance or from reaching full potency, especially in order to prevent harm to oneself"],
		["swing for the fences","to put forward one's maximum amount of effort or energy (into or toward something), an expression related to baseball)"],
		["sideburns","facial hair grown at the sides of the face, in front of the ears"],
		["shotgun wedding","a marriage where one or both partners are coerced, usually because the woman is pregnant"],
		["on the edge","close to the point at which something different, usually something bad, will happen"],
		["jump the gun","to do or say something too soon, especially without thinking carefully about it"],
		["excruciating pain","extreme suffering, hard to bear"],
		["effusive","emotionally excessive; overly demonstrative"],
		["drop the ball","to fail in one's responsibilities or duties, or to make a mistake, especially at a critical point or when the result is very negative"],
		["drink the Kool-Aid","to become a firm believer in something without any evidence of veracity; to follow a philosophy blindly"],
		["dead-on","precisely accurate and to the point, exactly right"],
		["dandruff","scaly white dead skin flakes from the human scalp"],
		["debauchery","excessive indulgence in sensual pleasure, sex, alcohol, or drugs"],
		["humblebrag","to make a seemingly modest, self-critical, or casual statement or reference that is meant to draw attention to one's admirable or impressive qualities or achievements"],
		["bait-and-switch","a sales technique, in which an inexpensive product is advertised to prospective customers who are then told the product is unavailable and are instead urged to buy a more expensive product"],
		["bippity boppity boo","a fictitious incantation used by magical people in fiction"],
		["cessation","the fact or process of ending or being brought to an end"],
		["cessation of arms","an agreement of warring parties to stop fighting"],
		["clear as a bell","easy to understand; very clear"],
		["close shave","a narrow escape from serious danger or trouble"],
		["spur of the moment","used to describe a decision that was made quickly and unexpectedly, without thinking, on impulse"],
		["speed bump","a small raised obstacle on the road forcing people to drive more slowly"],
		["soul patch","a single small patch of facial hair just below the lower lip and above the chin"],
		["smoking gun","a piece of incontrovertible incriminating evidence"],
		["shipshape","neat and with everything in its correct place"],
		["shill","an accomplice of a confidence trickster or swindler who poses as a genuine customer to entice or encourage others"],
		["cockamamie","ridiculous, nonsensical, silly"],
		["comeuppance","fate, punishment or retribution that one deserves"],
		["Jane Doe","a name given to an unidentified female who may be party to legal proceedings, or to an unidentified woman in hospital, or dead"],
		["John Doe","a name given to an unidentified man or boy who may be party to legal proceedings, or to an unidentified man in hospital, or dead"],
		["Craigslist","an American classified advertisements website with plenty of sections"],
		["eeny meeny miny moe","a rhyme used by children for choosing between two or more people or things"],
		["same diff","whatever; it's the same"],
		["scot-free","without receiving the deserved or expected punishment or without being harmed"],
		["sabbatical leave","a period of paid leave of absence granted to university staff, teachers, intended to develop and rejuvenate an individual employee, approximately every seventh year"],
		["melee","a noisy, confused fight, a tumultous mingling"],
		["hiatus","a break or a gap or interruption in space, time, or continuity"],
		["gobbledegook","unclear, wordy jargon; specialized language of a group incomprehensible to an outsider, a meaningless jumble of words; imitative of the sound made by a turkey"],
		["ghostwrite","to write something for someone else who is the named author"],
		["what's your poison","used to ask somebody what alcoholic drink they would like, spoken, humorous"],
		["figment of imagination","an experience that initially is thought to be real but is actually not"]
	]
]
