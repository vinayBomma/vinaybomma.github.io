<template>
  <Layout>
    <div
      class="hero container-inner align-center mx-auto flex flex-col sm:flex-row justify-between py-16 mt-16"
    >
      <div class="text-4xl font-bold w-full text-center sm:text-left">
        <div class="leading-tight text-green-700">Hi, I'm Vinay!</div>
      </div>
    </div>

    <div class="container-inner mx-auto text-center mb-8">
      <p class="text-lg sm:text-xl">
        A full stack web developer based in Mumbai
      </p>
      <p class="text-lg sm:text-xl text-center">
        Developing projects which solves important problems drives me
      </p>
      <p class="text-lg sm:text-xl text-center">
        Feel free to contact me or check my blog
      </p>
      <p class="text-lg sm:text-xl text-center">
        In for a penny, in for a pound
      </p>

      <div class="flex justify-center w-full mt-4">
        <a
          href="https://drive.google.com/file/d/1tpH3P3CKER2utUGUcpeWWMm2Rh-MMESS/view?usp=sharing"
          target="_blank"
        >
          <button
            class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
          >
            View Resume
          </button>
        </a>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div id="skills" style="position: relative; top: -40px; left: 0" />
      <div
        class="skills container-inner mx-auto text-xl border-t border-gray-500 py-16 mt-6 relative"
      >
        <h2 class="font-bold mb-6">Skills:</h2>

        <div
          class="absolute left-0"
          style="top: 100px; transform: translateX(-100%)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-wrap mb-4 -mx-4">
          <div class="w-full md:w-1/3 sm:w-1/2 mb-4 md:mb-0 px-4">
            <ul class="text-lg sm:text-xl space-y-6 text-left">
              <li>
                <div class="text-lg text-green-700">Javascript</div>
              </li>
              <li>
                <div class="text-lg text-green-700">Python</div>
              </li>
              <li>
                <div class="text-lg text-green-700">Nodejs</div>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 md:w-1/3">
            <ul class="text-lg sm:text-xl space-y-6 text-center">
              <li>
                <div class="text-lg text-green-700">React</div>
              </li>
              <li>
                <div class="text-lg text-green-700">Redux</div>
              </li>
              <li>
                <div class="text-lg text-green-700">Nextjs</div>
              </li>
              <li>
                <div class="text-lg text-green-700">Vuejs</div>
              </li>
              <li>
                <div class="text-lg text-green-700">GraphQL</div>
              </li>
              <li>
                <div class="text-lg text-green-700">MongoDB</div>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 md:w-1/3 sm:w-1/2">
            <ul class="text-lg sm:text-xl space-y-6 text-right">
              <li>
                <div class="text-lg text-green-700">Git</div>
              </li>
              <li>
                <div class="text-lg text-green-700">Web Security</div>
              </li>
              <li>
                <div class="text-lg text-green-700">
                  Progressive Web Apps (PWA)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div id="projects" style="position: relative; top: -40px; left: 0" />
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mt-6 mb-16 relative"
      >
        <h2 class="font-bold mb-6">Here are some projects I've worked on:</h2>

        <div
          class="absolute right-0"
          style="top: 50px; transform: translate(100%) rotate(180deg)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <ul class="text-lg sm:text-xl space-y-6">
          <li class="checkmark">
            <a href="https://github.com/vinayBomma/familiar" target="_blank">
              <div>Familiar</div>
            </a>
            <p class="text-lg text-gray-600">
              Developed a Progressive Web App (PWA) which tracks locations of
              family members. Users can converse via the chat feature.
              Implemented proper access controls as well as offline capability.
              Can be installed on the homescreen of Android &amp; iOS.
            </p>
          </li>
          <li class="checkmark">
            <a
              href="https://github.com/vinayBomma/attLog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Attend It</div>
            </a>
            <p class="text-lg text-gray-600">
              Used Vuejs and Nodejs to create PWA app which would help manage
              attendance. Implemented caching of data and offline capability
              with service workers. Used Trusted Web Activities (TWA) and made
              it available to install on Android as a native app.
            </p>
          </li>
          <li class="checkmark">
            <a
              href="https://github.com/vinayBomma/twister"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Twister</div>
            </a>
            <p class="text-lg text-gray-600">
              Scraped various source to gather data. Tongue twisters in 100+
              languages available to read. Used PWA and TWA to make it available
              to install via the Android Play Store.
            </p>
          </li>
          <li class="checkmark">
            <a
              href="https://github.com/vinayBomma/eventr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Eventr</div>
            </a>
            <p class="text-lg text-gray-600">
              App to create event reminders made in Node and MongoDB.
              Implemented Google OAuth for login purposes.
            </p>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div id="about" style="position: relative; top: -40px; left: 0" />
      <div
        class="get-to-know-me container-inner mx-auto text-xl pb-16 relative"
      >
        <h2 class="font-bold mb-6">Get to know me:</h2>

        <div
          class="absolute left-0"
          style="top: 50px; transform: translateX(-100%)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-16"
        >
          <div>
            <g-image
              src="../../static/photo.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            When I'm not coding, I'll probably be busy watching sports or
            reading about tech. Former AITA tennis player. An amateur cook ever
            since lockdown sprang my interest in cooking. Always open to have a
            conversation!
          </div>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>

    <div class="overflow-x-hidden">
      <div id="contact" style="position: relative; top: -40px; left: 0" />
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6">Contact me:</h2>

          <div
            class="absolute right-0 top-0"
            style="transform: translate(100%) rotate(180deg)"
          >
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

          <p class="mb-12 text-center">
            Feel free to get in touch and I'll gladly get back to you!
          </p>

          <div class="text-lg sm:text-lg mb-16">
            <form @submit.prevent="submitForm" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="formName"
                    placeholder="John Doe"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="formEmail"
                    placeholder="johndoe@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  v-model="formMessage"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <button
                  class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      formName: null,
      formEmail: null,
      formMessage: null,
    };
  },
  methods: {
    submitForm() {
      const info = {
        name: this.formName,
        email: this.formEmail,
        message: this.formMessage,
      };
      axios({
        url: "https://formspree.io/f/mdoyzjbj",
        method: "POST",
        data: info,
        headers: {
          Accept: "application/json",
        },
      })
        .then(() => {
          this.formName = null;
          this.formEmail = null;
          this.formMessage = null;
          alert("Messsage sent successfully!");
        })
        .catch((error) => {
          console.log("error: " + error);
        });
    },
  },
};
</script>
