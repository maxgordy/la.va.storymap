var config = {
  style: 'mapbox://styles/mapbox/satellite-v9',
  accessToken: 'pk.eyJ1IjoibWF4LW55dSIsImEiOiJjbTkxejFodHAwNm11MnNwdzEwNmZqeDl0In0.oWghXY8kwRBvRhHPCwwPhw',
  showMarkers: false,
  markerColor: '#3FB1CE',
  theme: 'light',
  use3dTerrain: true,
  auto: false,
  projection: 'mercator',
  inset: false,
  title: 'REMEMBER THE DEAD // FORGET THE LIVING',
  subtitle: 'An examination of monuments and decay at the Los Angeles National Cemetery and the West LA Veterans Home',
  byline: 'By Max Gordy',
  footer: 'Sources: West LA Master Plan, Federal Court Filings, UCLA Housing Voice #67.',

  chapters: [
    {
      id: "intro",
      alignment: "center",
      hidden: false,
      description: `
         <p><b>Scroll to learn more ... 
         </b></p>
            <p>↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</p>
          <br>
          <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2113602002/size=small/bgcol=333333/linkcol=ffffff/transparent=true/" seamless>
          <a href="https://micalevi.bandcamp.com/album/slob-air">slob air by Mica Levi</a></iframe>
          <i>here's something to listen to as we go along if you like</i>
        `,
      location: {
        center: [-118.46142, 34.05793],
        zoom: 10,
        pitch: 0,
        bearing: 0
      },
    },
    {
      id: "blank",
      alignment: "center",
      hidden: true,
      location: {
        center: [-118.46142, 34.05793],
        zoom: 10,
        pitch: 0,
        bearing: 0
      },
    },
    {
      id: "campus",
      alignment: "center",
      hidden: false,
      title: "VA Campus",
      description: `
      <p> The West Los Angeles Veterans Home is a sprawling campus located in Brentwood, one of the wealthiest neighborhoods in Los Angeles. It was created after the Civil War with the sole purpose of housing disabled veterans, but the space has been neglected and exploited for decades. The decaying infrastructure and housing on the campus, combined with the leasing out of VA land to private entities with no connection to veteran interests, has lead to a series of lawsuits against the VA. </p>
    

      <br>
    `,
      location: {
        center: [-118.47037, 34.05907],
        zoom: 13,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'campus-layer',
          opacity: .4
        }
      ]
    },
    {
      id: "deed",
      alignment: "center",
      hidden: false,
      title: "Original Enshrinement of Land for Veterans",
      image: "photos/deed.png",
      description: `
        <p> This is the 1888 deed where the United States received a donation of 300 acres of land in Los Angeles intended for a campus for "disabled volunteer soldiers" (e.g., homeless Veterans) "west of the Rocky Mountains." <br><br>
        </p>          `,
      location: {
        center: [-118.46736, 34.06358],
        zoom: 14,
        pitch: 0,
        bearing: 0
      },
      onChapterExit: [
        {
          layer: 'campus-layer',
          opacity: 0
        }
      ]
    },
    {
      id: "lanc",
      alignment: "center",
      hidden: false,
      title: "Los Angeles National Cemetery",
      description: `
        <p> On the other side of the 405, the busiest and most congested highway in the country, American soldiers from the Mexican American War to the War in Afghanistan are buried in the Los Angeles National Cemetery. Nestled in between the noise of the freeway and UCLA's bustling campus, it is a rare place of quiet reflection and dignity. </p>
         `,
      location: {
        center: [-118.45633, 34.05989],
        zoom: 15.4,
        pitch: 71,
        bearing: -76
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'lanc-layer',
          opacity: .4
        }
      ],
      onChapterExit: [
        {
          layer: 'lanc-layer',
          opacity: 0
        }
      ]
    },
    {
      id: "honor-in-death",
      alignment: "left",
      hidden: false,
      title: "there is HONOR in DEATH",
      image: "photos/graves3.png",
      location: {
        center: [-118.45234, 34.05976],
        zoom: 18.64,
        pitch: 77,
        bearing: -44
      },
      mapAnimation: "flyTo",
    },
    {
      id: "safety",
      alignment: "left",
      hidden: false,
      description: `
            <img src="photos/graves1.png"><br>
            <p>there is safety,</p>
            <img src="photos/graves2.png"><br>
            <p>grace,</p>
          `,
      location: {
        center: { lng: -118.45446, lat: 34.06219 },
        zoom: 19,
        pitch: 69,
        bearing: -68.80
      },
      mapAnimation: "flyTo",
    },
    {
      id: "peace",
      alignment: "left",
      hidden: false,
      description: `
            <img src="photos/graveszoom.png"><br>
            <p>and the appropriate reverence to be found</p>
            <img src="photos/graveshighway.png"><br>
            <p>in this space of peace, insulated from the violent roar.</p>
          `,
      location: {
        center: [-118.45895, 34.06554],
        zoom: 19,
        pitch: 68,
        bearing: 117.6
      },
      mapAnimation: "flyTo",
    },
    {
      id: "quote-monica-diaz",
      alignment: "right",
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
            <img src="photos/broken window.png">
          `,
      location: {
        center: [-118.46244, 34.06113],
        zoom: 16.8,
        pitch: 57.45,
        bearing: -164.44
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "church",
      alignment: "center",
      hidden: false,
      title: "",
      description: `
            <i>
              “Each administration since 2011 has been warned by the VA’s own Office of the Inspector General, federal courts, and veterans that they were not doing enough to house veterans in Los Angeles. Despite these warnings, the VA has not made good on its promise to build housing for veterans. Instead, it has continued leasing portions of the West Los Angeles campus to
              <ul>
                <li>a private school</li>
                <li>UCLA’s baseball team</li>
                <li>an oil company</li>
              </ul>
              and other private interests.
            <br><br>
              <b>The cost of the VA’s inaction is veterans’ lives</b> [...]
            </i>
            <p>- Federal Judge David O. Carter, September 6th, 2024</p>
          `,
      location: {
        center: { lng: -118.46365, lat: 34.06146 },
        zoom: 18,
        pitch: 63,
        bearing: 147
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "bw_schl",
      alignment: "left",
      hidden: false,
      title: "Brentwood School",
      description: `
            <p>Brentwood School leases a 22.06-acre site which contains its athletic complex, which includes a swimming pool, track & field, tennis courts, and baseball diamond.</p>
          `,
      location: {
        center: [-118.4666, 34.0656], // center of lease 1
        zoom: 17,
        pitch: 60,
        bearing: 0
      },
      featureId: "bw_schl",
      alignment: "left",
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: 'leases-layer',
          opacity: .5
        }
      ],
      onChapterExit: [
      ]
    },
    {
      id: "jr_stadium",
      alignment: "left",
      hidden: false,
      title: "UCLA Jackie Robinson Baseball Stadium",
      description: `
            <p>Lease for property used by the UCLA men’s baseball team for athletic fields and complex</p>
          `,
      location: {
        center: [-118.4591, 34.0591], // center of lease 2
        zoom: 17,
        pitch: 60,
        bearing: 0
      },
      featureId: "jr_stadium",
      alignment: "left",
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [

      ],
      onChapterExit: [
      ]
    },
    {
      id: "bridgeland",
      alignment: "left",
      hidden: false,
      title: "Bridgeland Resources - Oil Drilling",
      description: `
            <p>Purpose of Lease and Revocable License is to permit Breitburn to drill for, mine, extract, remove, and dispose of sub-surface oil and gas deposits.</p>
          `,
      location: {
        center: [-118.4557, 34.0587], // center of lease 3
        zoom: 18,
        pitch: 60,
        bearing: 0
      },
      featureId: "bridgeland",
      alignment: "left",
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
      ],
      onChapterExit: [
        {
          layer: 'leases-layer',
          opacity: 0
        }
      ]
    },
    {
      id: "church",
      alignment: "center",
      hidden: false,
      description: `
            <p> Wadsworth Chapel, built in 1900, closed in 1971 after it was damaged in the 1971 Sylmar earthquake. </p>
            <img src="photos/church1.png">
            <hr>
            <img src="photos/ducts.png">
            <p>
              [...] Over the past <ins>five decades</ins>, the West LA VA has been <ins>infected by bribery, corruption, and the influence of the powerful and their lobbyists,</ins> and <ins>enabled by a major educational institution in excluding veterans’ input about their own lands.</ins> It has allowed the drastic reduction of the size of the original plot of land deeded in 1888 to be an Old Soldiers’ Home. <br><br>
              [...] The VA now points to the waste that would be incurred by tearing [leases] down. In effect, the VA has quietly sold off these lands just as surely as granting a quitclaim deed.
              <br><br>
              The VA argues they are out of space, and that the lack of available acreage precludes any increase to the 1,200 units they have promised to open on the West LA campus by 2030.
            </p>
            <p>- Federal Judge Carter</p>
          `,
      location: {
        center: [-118.45622, 34.05504],
        zoom: 19,
        pitch: 65,
        bearing: -82
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
    },
    {
      id: "abandon-degrade-destroy",
      alignment: "center",
      hidden: false,
      title: "Decaying Housing and Infrasturcture",
      description: `
              <img src="photos/inside1.png">
              <img src="photos/inside2.png">
              <img src="photos/door1.png">
              <img src="photos/door2.png">
              <img src="photos/door 3 left.png", width="500">
              <img src="photos/door 3 right.png", width="500">
            `,
      location: {
        center: [-118.46045, 34.06280],
        zoom: 16.6,
        pitch: 70,
        bearing: 10
      },
      mapAnimation: "flyTo",
      rotateAnimation: false
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
            `,
      location: {
        center: 14.01,
        zoom: 14.01,
        pitch: 20.50,
        bearing: 178.78
      },
      mapAnimation: "flyTo",
      rotateAnimation: false
    }

  ]

};
