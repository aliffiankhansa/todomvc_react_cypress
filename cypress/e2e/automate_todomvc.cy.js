describe('Cypress TodoMVC', () => {
    context("TS-01 - Cek fungsi tambah to do list", function () {
        it('TC-01 - Menambahkan to do list menggunakan karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("cooking").type("{enter}")
        })

        it('TC-02 - Menambahkan to do list menggunakan numerik dengan jumlah 1 karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("c").type("{enter}")
        })

        it('TC-03 - Menambahkan to do list menggunakan numerik dengan jumlah lebih dari 1 nomor', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("1234").type("{enter}")
        })

        it('TC-04 - Menambahkan to do list menggunakan spesial karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type(",./l;’").type("{enter}")
        })

        it('TC-05 - Menambahkan to do list dengan menggunakan variasi karakter dan numerik', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("cooking1").type("{enter}")
        })

        it('TC-06 - Menambahkan to do list dengan menggunakan variasi karakter dan spesial karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("cooking & eating").type("{enter}")
        })

        it('TC-07 - Menambahkan to do list dengan menggunakan numerik dan spesial karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("1234,./").type("{enter}")
        })
        it('TC-08 - Menambahkan to do list dengan menggunakan empty string', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("     ").type("{enter}")
        })

        it('TC-09 - Menambahkan to do list dengan menggunakan empty space dan karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("       an").type("{enter}")
        })

        it('TC-10 - Menambahkan to do list dengan menggunakan empty space dan numerik', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("       13").type("{enter}")
        })

        it('TC-11 - Menambahkan to do list dengan menggunakan empty space dan spesial karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("      ,./").type("{enter}")
        })
    })
    context("TS-02 - Cek fungsi edit to do list", function () {
        it('TC-12 - Mengubah to do list dengan menggunakan karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("running").type("{enter}")
                }
            })
        })

        it('TC-13 - Mengubah to do list dengan menggunakan 1 karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("r").type("{enter}")
                }
            })
        })

        it('TC-14 - Mengubah to do list dengan menggunakan numerik', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("123456").type("{enter}")

                }
            })
        })

        it('TC-15 - Mengubah to do list dengan menggunakan spesial karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type(",./l;’").type("{enter}")
                }
            })
        })

        it('TC-16 - Mengubah to do list dengan menggunakan empty string', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("     ").type("{enter}")
                }
            })
        })

        it('TC-17 - Mengubah to do list dengan menggunakan empty space dan karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("     an").type("{enter}")
                }
            })
        })

        it('TC-18 - Mengubah to do list dengan menggunakan empty space dan numerik', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')

            cy.get(".new-todo").type("runnign").type("{enter}")

            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("   12").type("{enter}")
                }
            })
        })

        it('TC-19 - Mengubah to do list dengan menggunakan empty space dan spesial karakter', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')


            cy.get(".new-todo").type("runnign").type("{enter}")

            // cy.get('.toggle').first().check()
            cy.contains("runnign").dblclick()
            cy.get(".new-todo").each((elem, index) => {
                if (index === 1) {
                    cy.wrap(elem).clear()
                    cy.wrap(elem).type("   ,./").type("{enter}")
                }
            })
        })
    })
    context("TS-03 - Cek Fungsi Hapus To Do List", function () {
        it('TC-20 - Menghapus to do list', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign").type("{enter}")
            cy.get('.destroy').click({force: true})
        })

        it('TC-21 - Menghapus semua to do list yang statusnya menjadi complete', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign").type("{enter}")
            cy.get('.toggle').first().check()
            cy.get('.clear-completed').click()
        })
    })

    context("TS-04 - Cek Fungsi Menyelesaikan To Do List", function () {
        it('TC-22 - Menyelesaikan salah satu to do list', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign").type("{enter}")
            cy.get(".toggle").first().check()
            cy.contains('runnign',)
                .invoke('css', 'text-decoration')
                .should('contain', 'line-through')
        })

        it('TC-23 - Menyelesaikan semua to do list', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign{enter}").type("testing{enter}")
            cy.get('.toggle-all').click()
        })

    })

    context("TS-05 - Cek Fungsi Filter pada To Do List", function () {
        it('TC-24 - Menyelesaikan salah satu to do list', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign{enter}").type("testing{enter}").type("cooking{enter}")
            cy.get('.toggle').first().check()

            cy.contains('All').click({force: true})
        })

        it('TC-25 - Menyelesaikan semua to do list', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign{enter}").type("testing{enter}").type("cooking{enter}")
            cy.get('.toggle').first().check()

            cy.contains('Active').click()
            cy.url().should('include', '/active')

        })

        it('TC-26 - Menyelesaikan semua to do list', () => {
            cy.visit('https://todomvc.com/examples/react/dist/#/')
            cy.get(".new-todo").type("runnign{enter}").type("testing{enter}").type("cooking{enter}")
            cy.get('.toggle').first().check()

            cy.contains('Completed').click()
            cy.url().should('include', '/completed')
        })

    })
})