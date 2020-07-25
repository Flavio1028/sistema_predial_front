"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastrarEmpresaComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var CadastrarEmpresaComponent = /** @class */ (function () {
    function CadastrarEmpresaComponent(router, fb, spinner, modalService, service) {
        this.router = router;
        this.fb = fb;
        this.spinner = spinner;
        this.modalService = modalService;
        this.service = service;
        /*
         * Lista com os conjuntos disponiveis
         */
        this.listaConjuntosDisponiveis = [
            { id: 1, name: "Sala 1" },
            { id: 2, name: "Sala 2" },
            { id: 3, name: "Sala 3" },
            { id: 4, name: "Sala 4" },
            { id: 5, name: "Sala 5" },
        ];
        /*
         * Lista com os conjuntos adicionados
         */
        this.listaConjuntosAdicionados = [];
    }
    CadastrarEmpresaComponent.prototype.ngOnInit = function () {
        // Cria o formulario
        this.carregarFormulario();
    };
    /*
     * Carrega os dados do formulario
     */
    CadastrarEmpresaComponent.prototype.carregarFormulario = function () {
        this.formulario = this.fb.group({
            idEmpresa: [null, forms_1.Validators.required],
            razaoSocial: [null, forms_1.Validators.required],
            cnpj: [null, forms_1.Validators.required],
            tempMim: [null, forms_1.Validators.required],
            tempMax: [null, forms_1.Validators.required],
            horaAbertura: [null, forms_1.Validators.required],
            horaFechamento: [null, forms_1.Validators.required],
            listaConjuntos: [null, forms_1.Validators.required]
        });
    };
    CadastrarEmpresaComponent.prototype.cadastrar = function () {
        this.validarConjuntosAdiciodos();
        if (this.formulario.valid) {
        }
        else {
            this.modalService.modalAlerta("Todos os campos devem ser informados.");
        }
    };
    /*
     * Altera o valor da lista
     */
    CadastrarEmpresaComponent.prototype.validarConjuntosAdiciodos = function () {
        // Carrega os itens
        var lista = this.listaConjuntosAdicionados;
        // Altera o valor
        this.formulario.controls["listaConjuntos"].setValue(lista);
        // Verifica se esta valido
        if (this.listaConjuntosAdicionados.length != 0) {
            return true;
        }
        return false;
    };
    /*
     * Volta para pagina home da empresa
     */
    CadastrarEmpresaComponent.prototype.voltarHomeEmpresa = function () {
        this.router.navigate(["/empresa"]);
    };
    /*
     * Volta para pagina inicial
     */
    CadastrarEmpresaComponent.prototype.voltarHome = function () {
        this.router.navigate(["/home"]);
    };
    CadastrarEmpresaComponent = __decorate([
        core_1.Component({
            selector: "app-cadastrar-empresa",
            templateUrl: "./cadastrar-empresa.component.html",
            styleUrls: ["./cadastrar-empresa.component.scss"]
        })
    ], CadastrarEmpresaComponent);
    return CadastrarEmpresaComponent;
}());
exports.CadastrarEmpresaComponent = CadastrarEmpresaComponent;
