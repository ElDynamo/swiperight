<template>
  <div
    href="#contact-form"
    class="container m-4 mx-auto max-w-3xl py-10 text-left lg:my-20 lg:px-4"
  >
    <div class="text-center">
      <h1 class="section-header">ZAPISZ SIĘ NA SESJĘ</h1>
      <p class="container mx-auto p-4">
        Ilość miejsc na sesjach jest ograniczona. W przypadku większej ilości
        chętnych niż jest miejsc, pierwszeństwo mają osoby, które zgłosiły się
        najwcześniej.
      </p>
      <p class="mx-auto pb-4">
        Wypełnij formularz kontaktowy a ja odezwę się do Ciebie w ciągu 48h.
      </p>
    </div>
    <div>
      <div class="mb-4 grid w-full grid-cols-2 gap-4 px-2">
        <input
          id="name"
          class="focus:shadow-outline w-full rounded border px-4 py-2 outline-none focus:border-blue-500"
          type="text"
          autofocus
          placeholder="Imię i Nazwisko..."
        />

        <input
          id="mail"
          class="focus:shadow-outline w-full rounded border px-4 py-2 outline-none focus:border-blue-500"
          type="number"
          autofocus
          placeholder="numer telefonu"
        />
      </div>
      <div class="mb-4 w-full px-2">
        <input
          id="mail"
          class="focus:shadow-outline w-full rounded border px-4 py-2 outline-none focus:border-blue-500"
          type="mail"
          autofocus
          placeholder="adres e-mail"
        />
      </div>
      <div class="mb-4 w-full px-2">
        <div class="relative">
          <select
            class="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 pr-8 outline-none focus:border-blue-500"
            id="select-item"
          >
            <option>12 grudnia 2022</option>
            <option>13 grudnia 2022</option>
            <option>1 stycznia 2023</option>
            <option>2 stycznia 2023</option>
          </select>

          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4 w-full px-2">
        <textarea
          id="textarea1"
          class="focus:shadow-outline w-full rounded border px-4 py-2 outline-none focus:border-blue-500"
          rows="5"
          placeholder="Chciałbym zapisać się na sesję dnia..."
        ></textarea>
      </div>
    </div>
  </div>
</template>
