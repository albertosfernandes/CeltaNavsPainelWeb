import { PedidoProdutosModule } from './pedido-produtos.module';

describe('PedidoProdutosModule', () => {
  let pedidoProdutosModule: PedidoProdutosModule;

  beforeEach(() => {
    pedidoProdutosModule = new PedidoProdutosModule();
  });

  it('should create an instance', () => {
    expect(pedidoProdutosModule).toBeTruthy();
  });
});
