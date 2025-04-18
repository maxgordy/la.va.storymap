var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1IjoibWF4LW55dSIsImEiOiJjbTkxejFodHAwNm11MnNwdzEwNmZqeDl0In0.oWghXY8kwRBvRhHPCwwPhw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    projection: 'mercator',
    inset: false,
    title: 'REMEMBER THE DEAD // FORGET THE LIVING',
    subtitle: 'An examination of monuments and decay at the Los Angeles National Cemetery and the West LA Veterans Home',
    byline: 'By Max Gordy',
    footer: 'Sources: West LA Master Plan, Federal Court Filings, UCLA Housing Voice, L.A. Times, ACLU, Vets Advocacy',

    chapters: [
        {
            id: "intro",
            alignment: "center",
            hidden: false,
            title: "REMEMBER THE DEAD // FORGET THE LIVING",
            description: `
            <b>An examination of monuments and decay at the Los Angeles National Cemetery and the West LA Veteran's Home</b>
            <br><br>
            <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2113602002/size=small/bgcol=333333/linkcol=ffffff/transparent=true/" seamless>
            <a href="https://micalevi.bandcamp.com/album/slob-air">slob air by Mica Levi</a></iframe>
            <i>something to listen to as we go along if you like</i>
          `,
            location: {
                center: [-118.69682, 33.86829]                ,
                zoom: 9.21                ,
                pitch: 0               ,
                bearing: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: "honor-in-death",
            alignment: "center",
            hidden: false,
            title: "there is HONOR in DEATH",
            image: "photos/graves3.png",
            description: `
            <img src="photos/graves1.png"><br>
            <p>there is safety,</p>
            <img src="photos/graves2.png"><br>
            <p>grace,</p>
            <img src="photos/graveszoom.png"><br>
            <p>and the appropriate reverence to be found</p>
            <img src="photos/graveshighway.png"><br>
            <p>in this space of peace, insulated from the violent roar.</p>
          `,
            location: {
                center: [-118.46142, 34.05793],
                zoom: 12.73,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: "quote-monica-diaz",
            alignment: "center",
            hidden: false,
            title: "",
            description: `
            <i>
              “It’s usually better received when we're trying to help the homeless veterans to get housing, because people see them as having earned [the right to housing] because they have given the biggest sacrifice. <br><br>
              When we think about the civilian population, if we see housing as something that has to be earned, then the question is what they have done to earn it in comparison to what a veteran has done, which is fight for our country, right? <br><br>
              There's nothing that can compare to that.”
            </i>
            <br><br>
            - Monica Diaz, Executive Director, VHA Homeless Programs Office (2023)
            <br><br>
            <img src="photos/church1.png"><br>
            <img src="photos/broken window.png">
          `,
            location: {
                center: [-118.4652, 34.0605],
                zoom: 16.2,
                pitch: 70,
                bearing: 15
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: "judge-carter-quote",
            alignment: "center",
            hidden: false,
            title: "",
            description: `
            <i>
              “Each administration since 2011 has been warned by the VA’s own Office of the Inspector General, federal courts, and veterans that they were not doing enough to house veterans in Los Angeles. Despite these warnings, the VA has not made good on its promise to build housing for veterans. Instead, it has continued leasing portions of the West Los Angeles campus to a private school, UCLA’s baseball team, an oil company, and other private interests. <br><br>
              <b>The cost of the VA’s inaction is veterans’ lives</b> [...]
            </i>
            <hr>
            <img src="photos/ducts.png">
            <p>
              [...] Over the past <ins>five decades</ins>, the West LA VA has been <ins>infected by bribery, corruption, and the influence of the powerful and their lobbyists,</ins> and <ins>enabled by a major educational institution in excluding veterans’ input about their own lands.</ins> It has allowed the drastic reduction of the size of the original plot of land deeded in 1888 to be an Old Soldiers’ Home. <br><br>
              [...] The VA now points to the waste that would be incurred by tearing [leases] down. In effect, the VA has quietly sold off these lands just as surely as granting a quitclaim deed.
              <br><br>
              The VA argues they are out of space, and that the lack of available acreage precludes any increase to the 1,200 units they have promised to open on the West LA campus by 2030.
            </p>
            <p>- Federal Judge David O. Carter, September 6th, 2024</p>
          `,
            location: {
                center: [-118.4635, 34.0638],
                zoom: 15.8,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: "abandon-degrade-destroy",
            alignment: "center",
            hidden: false,
            title: "ABANDON / DEGRADE / DESTROY",
            description: `
              <img src="photos/inside1.png">
              <h3>DEGRADE</h3>
              <img src="photos/inside2.png">
              <h3>DESTROY</h3>
              <img src="photos/door1.png">
              <i>don't answer</i>
              <img src="photos/door2.png">
              <p>this place is not home</p>
              <img src="photos/door 3 left.png", width="500">
              go 
              <img src="photos/door 3 right.png", width="500">
            `,
            location: {
                center: [-118.46045, 34.06280],
                zoom: 16.6,
                pitch: 70,
                bearing: 10
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: "mustardfield-quote",
            alignment: "center",
            hidden: false,
            title: "",
            description: `
              <div>
                  <img src="photos/hallway.png">
                  <h3>maybe if we pretend they aren't here</h3>
                  <img src="photos/mustardfield.png" width="1000">
                  <p>they'll disappear</p>
              </div>
              <hr>
              <hr>
              <hr>
              <p> 
                  *(UCLA Housing Voice Episode 67)
              </p>
            `,
            location: {
                center: [-118.46500, 34.06270],
                zoom: 16.6,
                pitch: 70,
                bearing: 0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        }

    ]

};
