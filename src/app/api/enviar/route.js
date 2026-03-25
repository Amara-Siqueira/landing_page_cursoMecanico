

export const POST = async (req) => {
  
  if (!process.env.GOOGLE_SCRIPT_URL) {
    console.error("GOOGLE_SCRIPT_URL não definida!")
    return new Response(JSON.stringify({ erro: "URL não configurada" }), { status: 500 })
  }

  const dados = await req.json()

  const enviando = await fetch(process.env.GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })

  const resposta = await enviando.text()
  console.log("Resposta do Google:", resposta)

  return new Response(JSON.stringify({ ok: true }), { status: 200 } )
}