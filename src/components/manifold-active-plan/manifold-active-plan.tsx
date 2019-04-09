import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'manifold-active-plan',
  styleUrl: 'plan-selector.css',
  shadow: true,
})
export class ManifoldActivePlan {
  @Prop() product: Catalog.ExpandedProduct;
  @Prop() plans: Catalog.ExpandedPlan[];
  @State() selectedPlanId: string;

  componentWillLoad() {
    if (this.plans.length) {
      this.selectPlan(this.plans[0].id);
    }
  }

  selectPlan = (planId: string) => {
    this.selectedPlanId = planId;
  };

  render() {
    return [
      <manifold-plan-menu
        plans={this.plans}
        selected-plan-id={this.selectedPlanId}
        selectPlan={this.selectPlan}
      />,
      <div>
        <manifold-plan-details
          product={this.product}
          plan={this.plans.find(plan => plan.id === this.selectedPlanId)}
        />
      </div>,
    ];
  }
}