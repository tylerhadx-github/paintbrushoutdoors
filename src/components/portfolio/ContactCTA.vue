<template>
  <section id="contact" class="contact" ref="root">
    <div class="contact__bg" aria-hidden="true">
      <span class="contact__orb"></span>
    </div>

    <div class="contact__inner" ref="inner">
      <span class="contact__eyebrow">Let's build something</span>
      <h2 class="contact__title">
        Have a product that needs to <em>actually launch?</em>
      </h2>
      <p class="contact__lead">
        We take on full-stack builds, hardware-meets-software projects, AI tools,
        and the occasional business from scratch. If it needs to go from idea to
        live, let's talk.
      </p>

      <form v-if="!sent" class="contact__form" novalidate @submit.prevent="onSubmit">
        <div class="field-row">
          <div class="field">
            <label for="cf-name">Name</label>
            <input
              id="cf-name"
              v-model.trim="form.name"
              type="text"
              autocomplete="name"
              placeholder="Your name"
              required
            />
          </div>
          <div class="field">
            <label for="cf-email">Email</label>
            <input
              id="cf-email"
              v-model.trim="form.email"
              type="email"
              autocomplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div class="field">
          <label for="cf-message">What are you building?</label>
          <textarea
            id="cf-message"
            v-model.trim="form.message"
            rows="4"
            placeholder="Tell us about your project, timeline, and what you need..."
            required
          ></textarea>
        </div>

        <input
          v-model="form.botcheck"
          class="contact__honeypot"
          type="text"
          name="botcheck"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />

        <p v-if="error" class="contact__error" role="alert">
          <i class="mdi mdi-alert-circle-outline"></i> {{ error }}
        </p>

        <div class="contact__actions">
          <button type="submit" class="btn btn--primary" :disabled="sending">
            <template v-if="sending">
              <i class="mdi mdi-loading mdi-spin"></i> Sending...
            </template>
            <template v-else>
              <i class="mdi mdi-send-outline"></i> Send message
            </template>
          </button>
          <a class="btn btn--ghost" href="https://github.com/tylerhadx-github" target="_blank" rel="noopener">
            <i class="mdi mdi-github"></i> GitHub
          </a>
        </div>
      </form>

      <div v-else class="contact__sent" role="status">
        <span class="contact__sent-icon"><i class="mdi mdi-check"></i></span>
        <h3>Thanks{{ form.name ? `, ${form.name}` : '' }}!</h3>
        <p>Your message is ready to go. We'll be in touch soon.</p>
        <button class="btn btn--ghost" type="button" @click="reset">Send another</button>
      </div>

      <a
        class="contact__youtube"
        href="https://www.youtube.com/@haddixhunting"
        target="_blank"
        rel="noopener"
      >
        <span class="contact__youtube-icon"><i class="mdi mdi-youtube"></i></span>
        <span class="contact__youtube-text">
          <strong>Follow the hunts in the wild</strong>
          <span>Haddix Hunting on YouTube</span>
        </span>
        <i class="mdi mdi-arrow-top-right contact__youtube-arrow"></i>
      </a>

      <p class="contact__foot">Paintbrush Outdoors - building real products, indoors and out.</p>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, reactive, ref } from 'vue'
  import { useScrollReveal } from '@/composables/useScrollReveal'
  import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '@/config/contact'

  const root = ref(null)
  const inner = ref(null)
  const sent = ref(false)
  const sending = ref(false)
  const error = ref('')

  const form = reactive({
    name: '',
    email: '',
    message: '',
    botcheck: '',
  })

  async function onSubmit () {
    if (!form.name || !form.email || !form.message) return
    if (form.botcheck) return // honeypot tripped - silently ignore bots

    sending.value = true
    error.value = ''

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New inquiry from ${form.name} - Paintbrush Outdoors`,
          from_name: 'Paintbrush Outdoors site',
          botcheck: form.botcheck,
        }),
      })

      const result = await res.json().catch(() => ({}))

      if (res.ok && result.success) {
        sent.value = true
      } else {
        error.value = result.message || 'Something went wrong sending your message. Please try again.'
      }
    } catch {
      error.value = 'Could not reach the server. Check your connection and try again.'
    } finally {
      sending.value = false
    }
  }

  function reset () {
    form.name = ''
    form.email = ''
    form.message = ''
    form.botcheck = ''
    sent.value = false
    error.value = ''
  }

  const { revealStagger } = useScrollReveal()

  onMounted(() => {
    revealStagger(inner.value, ':scope > *', { y: 30, stagger: 0.1 })
  })
</script>

<style scoped>
  .contact {
    position: relative;
    padding: clamp(5rem, 12vw, 9rem) 1.25rem;
    overflow: hidden;
    text-align: center;
  }

  .contact__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .contact__orb {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70vw;
    max-width: 760px;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124, 92, 255, 0.28), transparent 65%);
    filter: blur(40px);
  }

  .contact__inner {
    position: relative;
    z-index: 1;
    max-width: 720px;
    margin: 0 auto;
  }

  .contact__eyebrow {
    display: inline-block;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7c5cff;
    margin-bottom: 1rem;
  }

  .contact__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(2.1rem, 6vw, 4rem);
    line-height: 1.04;
    letter-spacing: -0.02em;
    margin: 0;
    color: #f7f7fb;
  }

  .contact__title em {
    font-style: normal;
    background: linear-gradient(120deg, #7c5cff, #b89bff 50%, #3ddc97);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .contact__lead {
    margin: 1.5rem auto 0;
    max-width: 56ch;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.6;
    color: #b3b3c0;
  }

  .contact__form {
    margin: 2.5rem auto 0;
    max-width: 560px;
    text-align: left;
  }

  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .field label {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #a7a7b4;
    margin-bottom: 0.45rem;
  }

  .field input,
  .field textarea {
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    color: #f4f4f8;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 0.85rem 1rem;
    transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
    resize: vertical;
  }

  .field input::placeholder,
  .field textarea::placeholder {
    color: #6f6f7e;
  }

  .field input:focus,
  .field textarea:focus {
    outline: none;
    border-color: rgba(124, 92, 255, 0.7);
    background: rgba(124, 92, 255, 0.06);
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.12);
  }

  .contact__honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .contact__error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0 1rem;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 93, 115, 0.4);
    background: rgba(255, 93, 115, 0.08);
    color: #ff8a9b;
    font-size: 0.9rem;
  }

  .btn:disabled {
    opacity: 0.65;
    cursor: progress;
    transform: none;
  }

  .contact__sent {
    margin: 2.5rem auto 0;
    max-width: 520px;
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(61, 220, 151, 0.35);
    background: rgba(61, 220, 151, 0.06);
  }

  .contact__sent-icon {
    display: inline-grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    font-size: 1.7rem;
    color: #0b0b10;
    background: #3ddc97;
    box-shadow: 0 0 24px rgba(61, 220, 151, 0.5);
    margin-bottom: 1rem;
  }

  .contact__sent h3 {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 1.5rem;
    margin: 0 0 0.4rem;
    color: #f4f4f8;
  }

  .contact__sent p {
    margin: 0 0 1.5rem;
    color: #b3b3c0;
  }

  .contact__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.9rem;
    margin-top: 1.75rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .btn--primary {
    background: linear-gradient(120deg, #7c5cff, #6344e6);
    color: #fff;
    box-shadow: 0 12px 36px rgba(124, 92, 255, 0.4);
  }

  .btn--primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 48px rgba(124, 92, 255, 0.55);
  }

  .btn--ghost {
    color: #f4f4f8;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .btn--ghost:hover {
    transform: translateY(-3px);
    border-color: rgba(124, 92, 255, 0.7);
  }

  .contact__youtube {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin: 3.25rem auto 0;
    padding: 0.85rem 1.5rem 0.85rem 0.9rem;
    border-radius: 999px;
    text-decoration: none;
    text-align: left;
    border: 1px solid rgba(255, 0, 51, 0.28);
    background: rgba(255, 0, 51, 0.06);
    transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  }

  .contact__youtube:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 0, 51, 0.6);
    background: rgba(255, 0, 51, 0.1);
  }

  .contact__youtube-icon {
    display: inline-grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 1.6rem;
    color: #fff;
    background: #ff0033;
    box-shadow: 0 8px 22px rgba(255, 0, 51, 0.4);
  }

  .contact__youtube-text {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
  }

  .contact__youtube-text strong {
    color: #f4f4f8;
    font-size: 1rem;
  }

  .contact__youtube-text span {
    color: #b3b3c0;
    font-size: 0.85rem;
  }

  .contact__youtube-arrow {
    color: #ff5c75;
    font-size: 1.2rem;
  }

  .contact__foot {
    margin-top: 2rem;
    font-size: 0.85rem;
    color: #6f6f7e;
  }

  @media (max-width: 560px) {
    .field-row {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
</style>
